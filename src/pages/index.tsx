import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import { ErrorResponse } from "@/types";
import { fetchArticleData, getDataSEO } from "@/lib";

import styles from "../styles/Home.module.css";

type PageProps = ReturnType<typeof getDataSEO> & ErrorResponse;

type ServerSidePropsFn = GetServerSideProps<
  ReturnType<typeof getDataSEO> | ErrorResponse
>;

/**
 * I would argue about using the SSR here for the content fetching, I would suggest to go for `GetStaticProps` with incremental re-generation, which may be a little better for performance IF we shall fetch LARGE amount of content.
 */
export const getServerSideProps: ServerSidePropsFn = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public,  s-maxage=300, stale-while-revalidate=59"
  );
  context.res.setHeader("Content-Security-Policy", `frame-ancestors 'self';`);

  const { data, error } = await fetchArticleData();

  if (!!data && !error) {
    const pageData = getDataSEO(data);
    return {
      props: {
        ...pageData,
      },
    };
  }

  return { props: { error: error as string } };
};

const Article: NextPage<PageProps> = ({
  pageSubTitle,
  pageTitle,
  productsList,
  productsStructuredData,
  error,
}) => {
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
