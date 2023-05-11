import "@/styles/Home.module.css";
import "@/styles/boostrap/css/bootstrap.min.css"
import Main from "@/template/Main";
export default function App({ Component, pageProps }) {
  return <Main>
    <Component {...pageProps} />
  </Main>
}
