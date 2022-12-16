import { getProductsStructuredData, getDataSEO } from "@/lib";
import { article } from "@/lib/mockData";

import { StructuredObject } from "@/types";

const { ItemList, ListItem, Product, Review } = StructuredObject;

describe("utils", () => {
  describe("getProductsStructuredData", () => {
    const received = getProductsStructuredData(
      article.products,
      article.authors[0].name
    );

    it("should return expected object structure", () => {
      expect(received["@type"]).toEqual(ItemList);
      expect(received.itemListElement.length).toBeGreaterThan(0);
      expect(received.itemListElement[0]["@type"]).toEqual(ListItem);
      expect(received.itemListElement[0].item["@type"]).toEqual(Product);
      expect(received.itemListElement[0].item.review["@type"]).toEqual(Review);
    });

    it("should return review pros and cons expected structure", () => {
      const { positiveNotes, negativeNotes } =
        received.itemListElement[0].item.review;

      [positiveNotes, negativeNotes].forEach((note) => {
        expect(note["@type"]).toEqual(ItemList);
        expect(note["@type"]).toEqual(ItemList);
        expect(note.itemListElement[0]["@type"]).toEqual(ListItem);
        expect(Array.isArray(note.itemListElement)).toBe(true);
        expect(typeof note.itemListElement[0].position).toEqual("string");
        expect(typeof note.itemListElement[0].name).toEqual("string");
      });
    });

    it("should return review pros and cons expected values", () => {
      const { positiveNotes, negativeNotes } =
        received.itemListElement[0].item.review;

      expect(positiveNotes.itemListElement[0].position).toEqual("1");
      expect(negativeNotes.itemListElement[0].position).toEqual("1");
      expect(positiveNotes.itemListElement[0].name).toEqual("Stunning screen");
      expect(negativeNotes.itemListElement[0].name).toEqual(
        "No wireless charging"
      );
    });
  });

  describe("getDataSEO", () => {
    const received = getDataSEO(article);

    it("should return expected data structure", () => {
      const {
        productsStructuredData,
        productsList,
        head,
        pageSubTitle,
        pageTitle,
      } = received;

      expect(typeof productsStructuredData).toEqual("object");
      expect(Array.isArray(productsList)).toBe(true);
      expect(typeof head.title).toEqual("string");
      expect(head.meta[0].name).toEqual("description");
      expect(typeof head.meta[0].content).toEqual("string");
      expect(typeof pageSubTitle).toEqual("string");
      expect(typeof pageTitle).toEqual("string");
    });
  });
});
