import type { NextPage } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import Doctors from '../components/Doctors';

const Home: NextPage = () => {
  return <Doctors />;
};

export default Home;
