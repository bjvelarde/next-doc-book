import type { NextPage } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Doctors from '../components/Doctors';

const Home: NextPage = () => {
  return <Doctors />;
};

interface Props {
  locale: string;
}

export const getStaticProps = async ({ locale }: Props) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
});

export default Home;
