import NavBar from "../components/NavBar";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>HACEA</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
