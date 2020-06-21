import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.scss";

function Layout({ children }) {
  return <div>{children}</div>;
}

export default Layout;
