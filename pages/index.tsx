import type { NextPage } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Doctors from '../components/Doctors';

interface Props {
  locale: string;
}

const Home: NextPage<Props> = (props: Props) => {
  return <Doctors />;
};

export const getStaticProps = async ({ locale = 'en' }: Props) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
});

export default Home;
