import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { readFile } from "fs/promises";
import path from "path";

import { ArticleType, ErrorResponse } from "../types";
import styles from "../styles/Home.module.css";

export const getServerSideProps: GetServerSideProps<
  ArticleType | ErrorResponse
> = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public,  s-maxage=300, stale-while-revalidate=59"
  );
  context.res.setHeader("Content-Security-Policy", `frame-ancestors 'self';`);

  try {
    const data = await readFile(
      path.join(process.cwd(), "/data.json"),
      "utf-8"
    );
    const article = JSON.parse(data) as ArticleType;

    return {
      props: {
        ...article,
      },
    };
  } catch (err) {
    return { props: { error: "Failed to fetch article data" } };
  }
};

const Article: NextPage<ArticleType> = ({ extra, products }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brightsites seo test</title>
        <meta name="description" content="Brightsites seo test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Seo brightsites test</h1>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Article;
