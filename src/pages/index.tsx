import type { GetStaticProps, NextPage } from "next";
import Script from "next/script";
import Head from "next/head";

import { fetchArticleData, getDataSEO } from "@/lib";
import { ErrorResponse } from "@/types";
import { DELAY } from "@/constants";

import styles from "../styles/Home.module.css";

type PageProps = ReturnType<typeof getDataSEO> & ErrorResponse;

type GetStaticPropsFn = GetStaticProps<
  ReturnType<typeof getDataSEO> | ErrorResponse
>;

/**
 * I would suggest to use the SSG( or rather ISR) here for the content generation, which may be a little better for performance IF we shall fetch LARGE amount of content.
 * the custom headers are set in the `next.config.js`
 */
export const getStaticProps: GetStaticPropsFn = async (_context) => {
  const { data, error } = await fetchArticleData();

  if (!!data && !error) {
    const pageData = getDataSEO(data);

    return {
      props: {
        ...pageData,
      },
      revalidate: DELAY.MINUTES_10,
    };
  }

  return { props: { error: error as string } };
};

const Article: NextPage<PageProps> = ({
  pageSubTitle,
  head,
  pageTitle,
  productsList,
  productsStructuredData,
  error,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{head.title}</title>
        {head.meta.map((currentMetaTag) => (
          <meta
            key={currentMetaTag.id}
            name={currentMetaTag.name}
            content={currentMetaTag.content}
          />
        ))}
        <link rel="icon" href="/favicon.ico" />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productsStructuredData),
          }}
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Seo brightsites test</h1>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Article;
