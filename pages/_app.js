import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link href='https://fonts.cdnfonts.com/css/akira-expanded' rel='stylesheet' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
