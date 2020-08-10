import Head from "next/head";
import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        ></meta>
        <title>Motoki Watanabe | Engineer, VJ</title>
      </Head>
      <header></header>
      <div className="container">{children}</div>
      <footer></footer>
    </>
  );
}

export default Layout;
