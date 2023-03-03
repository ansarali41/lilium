import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lilium</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link
          href='https://fonts.cdnfonts.com/css/akira-expanded'
          rel='stylesheet'
        />*/}

        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
          crossOrigin='anonymous'
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
