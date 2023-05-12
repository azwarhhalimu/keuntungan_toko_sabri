import "@/styles/Home.module.css";
import "@/styles/boostrap/css/bootstrap.min.css"
import Main from "@/template/Main";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return <Main>
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="PWA Workshop" />
      <meta name="apple-mobile-web-app-title" content="PWA Workshop" />
      <meta name="msapplication-starturl" content="/index.html" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Component {...pageProps} />
  </Main>
}
