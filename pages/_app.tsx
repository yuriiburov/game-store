import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import store from '../src/redux/store';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Head>
      <title>GameStore</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap"
        rel="stylesheet"
      />
    </Head>
    <NextNProgress color="#333" startPosition={0.3} stopDelayMs={200} height={3} />
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
