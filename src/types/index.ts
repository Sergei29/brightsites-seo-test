export type Enitity<T = unknown> = {
  type: string;
  data: T;
};

export type Stats = {
  publication_id: number;
  affiliate_match: number;
  link_http_code: number;
  out_of_stock: number;
  timestamp: number;
  date: string;
};

export type Image = {
  title: string;
  description: string;
  caption: null | string;
  copyright: string;
  credit: null | string | number;
  alt: null | string;
  doNotReuse: boolean;
  url: string;
  id: null | string | number;
  bundle: string;
  mid: number;
  changed: string;
  created: string;
  uid: number;
  workflow: {
    name: string;
    id: number;
    uuid: string;
    firstLetter: string;
  };
  extra: {
    imageSize: {
      width: number;
      height: number;
    };
  };
};

export type ProductInformation = {
  productSpec: {
    value: string;
    key: string;
  }[];
  pros: {
    pros: string[];
    title?: string;
  };
  cons: {
    cons: string[];
    title?: string;
  };
};

export type ProductExtra = {
  brand: string;
  model: string;
  bestFor: string;
  productId?: string;
  productIdType?: string;
  rating: string;
  priceComparisonProvider: string;
  information: ProductInformation;
};

export type ProductData = {
  title: string;
  id: number;
  uuid: string;
  stats: Stats;
  remoteID: null | string;
  vendorName: string;
  price: string;
  vendorLink: string;
  priceComparison: string;
  image: Enitity<Image>;
  body: Enitity<{ markup: string }>[];
  extra: ProductExtra;
  created: string;
  changed: string;
  brand: string;
  model: string;
  bestFor: string;
  productId?: string;
  productIdType?: string;
  rating: string;
  priceComparisonProvider: string;
  information: ProductInformation;
};

export type Extra = {
  featureTitle: string;
  isBreakingNews: string;
  authorInfo: string;
  isHideNewsletterSignUp: boolean;
  isDisableAutoGallery: string;
  isDisableAffiliate: string;
  isDisableImportUpdate: string;
  isDisableAllAds: string;
  isHideDisplayAds: string;
  isHideHardCodedAds: string;
  isHidePreRollAds: string;
  urlRedirect: string;
  seoDescription: string;
  canonicalUrl: string;
  starRating: string;
  isHideFromFIA: string;
  isHideFromAMP: string;
  isHideFromAppleNews: string;
  isShowSponsoredCapsule: string;
  displayDatePreference: string;
  liveblog: string;
  liveblogKeypoints: string;
  liveblogKeypointsTitle: string;
  verdict: Enitity<{
    markup: string;
  }>[];
  silentUpdate: boolean;
  heroImageLocalCaption: string;
  heroImageLocalCopyright: string;
  products: Enitity<ProductData>[];
};

export type AuthorType = { name: string; id: number } & Record<string, any>;

export type ArticleType = {
  type: string;
  id: string;
  title: string;
  titleShort: string;
  titleSocial: string;
  titleSEO: string;
  authors: AuthorType[];
  products: Enitity<ProductData>[];
  extra: Extra;
} & Record<string, any>;

export type ErrorResponse = {
  error: string;
};

export enum StructuredObject {
  ItemList = "ItemList",
  ListItem = "ListItem",
  Review = "Review",
  Rating = "Rating",
  Person = "Person",
  Product = "Product",
}
