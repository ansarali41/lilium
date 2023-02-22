import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
<script src="https://kit.fontawesome.com/4c7217f3f6.js" crossorigin="anonymous"></script>

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lilium</title>
        
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link href='https://fonts.cdnfonts.com/css/akira-expanded' rel='stylesheet' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
