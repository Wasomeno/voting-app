import { QueryClientProvider } from "@tanstack/react-query";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import { queryClient } from "../context/reactQueryClient";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        {/* <Loading /> */}
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
