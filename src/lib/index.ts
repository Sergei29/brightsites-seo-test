import { Enitity, ProductData, ArticleType, StructuredObject } from "../types";

const { ItemList, ListItem, Product, Review, Rating, Person } =
  StructuredObject;

type GetListItemParams = {
  product: ProductData;
  currentPosition: number;
  author: string;
};

/**
 * O(n)
 */
const getProductsList = (
  productsInitialList: Enitity<ProductData>[]
): ProductData[] =>
  productsInitialList.map((currentProductInfo) => currentProductInfo.data);

/**
 * O(n)
 */
const getProsAndConsListItems = (prosAndCons: string[]) =>
  prosAndCons.map((currentNote, index) => ({
    "@type": ListItem,
    position: `${index + 1}`,
    name: currentNote,
  }));

/**
 * O(n)
 */
const getListItemFromProduct = ({
  product,
  currentPosition,
  author,
}: GetListItemParams) => ({
  "@type": ListItem,
  position: `${currentPosition}`,
  item: {
    "@type": Product,
    url: product.vendorLink,
    name: product.title,
    image: product.image.data.url,
    review: {
      "@type": Review,
      author: {
        "@type": Person,
        name: author,
      },
      reviewRating: {
        "@type": Rating,
        ratingValue: product.rating,
      },
      positiveNotes: {
        "@type": ItemList,
        itemListElement: getProsAndConsListItems(product.information.pros.pros),
      },
      negativeNotes: {
        "@type": ItemList,
        itemListElement: getProsAndConsListItems(product.information.cons.cons),
      },
    },
  },
});

/**
 * O(n^2) = O(n*n) - not ideal to use client-side, however this util function is intended to be used server side only
 */
export const getProductsStructuredData = (
  productsInitialList: Enitity<ProductData>[],
  author: string
) => {
  const productsList = getProductsList(productsInitialList);

  return {
    "@context": "https://schema.org",
    "@type": ItemList,
    itemListElement: productsList.map((currentProduct, currentIndex) =>
      getListItemFromProduct({
        product: currentProduct,
        currentPosition: currentIndex + 1,
        author,
      })
    ),
  };
};

/**
 * @descrioption agggregates the fetched bulk of data in order to collect the page essential data
 * @param {object} article article object
 * @returns {object} payload including seo structured data and page content
 */
export const getDataSEO = (article: ArticleType) => {
  const { authors, products, extra, titleSEO, title, titleShort } = article;

  return {
    productsStructuredData: getProductsStructuredData(
      products,
      authors[0].name
    ),
    productsList: getProductsList(products),
    head: {
      title: titleSEO,
      meta: [{ id: 1, name: "description", content: extra.seoDescription }],
    },
    pageTitle: title,
    pageSubTitle: titleShort,
  };
};
