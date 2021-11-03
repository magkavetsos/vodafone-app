import "../styles/globals.css";
import Head from "next/head";
import Header from "./layout/Header/index.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vodafone App</title>
        <meta name="description" content="Vodafone App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
