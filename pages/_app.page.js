import "../styles/globals.css";
import Head from "next/head";
import Header from "./layout/Header/index.js";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 100,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Vodafone App</title>
        <meta name="description" content="Vodafone App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
