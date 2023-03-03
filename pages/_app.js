import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lilium</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/*<link*/}
        {/*  href="https://fonts.cdnfonts.com/css/akira-expanded"*/}
        {/*  rel="stylesheet"*/}
        {/*/>*/}

      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
