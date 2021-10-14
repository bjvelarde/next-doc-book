import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from '../context';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    </Head>
    <Component {...pageProps} />
  </Provider>
}
export default MyApp;
