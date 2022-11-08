import { QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import { queryClient } from "../context/reactQueryClient";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const basePath = router.pathname.split("/");
  const titleMap = new Map();
  titleMap.set("filter", "Filter Kandidat");
  titleMap.set("", "Halaman Voting");

  console.log(basePath);

  return (
    <QueryClientProvider client={queryClient}>
      <title>Voting App - {titleMap.get(basePath[1])}</title>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
