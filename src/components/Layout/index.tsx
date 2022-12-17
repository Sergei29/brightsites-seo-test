import React from "react";
import Head from "next/head";

import classes from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => (
  <div className={classes.container}>
    <Head>
      <title>Brighsites Tech Test</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={classes.main}>{children}</main>
  </div>
);

export default Layout;
