import type { NextPage } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Doctor from '../../components/Doctor';
import useApi from '../../api';
import { Doctor as DoctorType } from '../../types';

interface Props {
  locale: string;
}

const DoctorPage: NextPage<Props> = (props: Props) => {
  return <Doctor />;
};

export const getStaticPaths = async () => {
  const { fetchDoctors } = useApi();
  const doctors = await fetchDoctors();

  const paths = doctors.data.map((doctor: DoctorType) => ({
    params: { id: doctor.id },
  }))

  return { paths, fallback: false }
};

export const getStaticProps = async ({ locale }: Props) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
});

export default DoctorPage;
