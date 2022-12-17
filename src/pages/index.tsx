import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { fetchArticleData, getDataSEO } from "@/lib";
import ProductCard from "@/components/ProductCard";
import RenderWhen from "@/components/RenderWhen";
import PageTitle from "@/components/PageTitle";
import { ErrorResponse } from "@/types";
import { DELAY } from "@/constants";

import classes from "@/styles/Home.module.css";

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
    <>
      <Head>
        {<title>{!error ? head.title : error}</title>}
        <RenderWhen isTrue={!error}>
          {head?.meta &&
            head.meta.map((currentMetaTag) => (
              <meta
                key={currentMetaTag.id}
                name={currentMetaTag.name}
                content={currentMetaTag.content}
              />
            ))}
          <script
            key="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(productsStructuredData),
            }}
          />
        </RenderWhen>
      </Head>

      <PageTitle title={pageTitle} subTitle={pageSubTitle} error={error} />
      <RenderWhen isTrue={!error}>
        <div className={classes.grid}>
          {productsList &&
            productsList.map((currentProduct) => (
              <ProductCard
                key={currentProduct.id}
                title={currentProduct.title}
                image={currentProduct.image}
                price={currentProduct.price}
                vendorLink={currentProduct.vendorLink}
                rating={currentProduct.rating}
                pros={currentProduct.information.pros.pros}
                cons={currentProduct.information.cons.cons}
              />
            ))}
        </div>
      </RenderWhen>
    </>
  );
};

export default Article;
