import { render, screen } from "@testing-library/react";

import ProductCard, { Props } from "@/components/ProductCard";
import { article } from "@/lib/mockData";

const { title, image, vendorLink, price, rating, information } =
  article.products[0].data;

const mockProps: Props = {
  title,
  image,
  price,
  vendorLink,
  rating,
  pros: information.pros.pros,
  cons: information.cons.cons,
};

describe("ProductCard", () => {
  beforeEach(() => {
    render(<ProductCard {...mockProps} />);
  });

  it("should render the component", () => {
    const productReviewItem = screen.getByRole("article");

    expect(productReviewItem).toBeInTheDocument();
  });

  it("should display component image", () => {
    const productImage = screen.getByRole("img");

    expect(productImage).toBeInTheDocument();
  });

  it("should  display component title", () => {
    const productTitle = screen.getByText(mockProps.title);

    expect(productTitle).toBeInTheDocument();
  });

  it("should display component pros", () => {
    const productPositiveNotesTitle = screen.getByText("Pros:");
    const productPositiveNote = screen.getByText(mockProps.pros[0]);

    expect(productPositiveNote).toBeInTheDocument();
    expect(productPositiveNotesTitle).toBeInTheDocument();
  });

  it("should display component cons", () => {
    const productNegativeNotesTitle = screen.getByText("Cons:");
    const productNegativeNote = screen.getByText(mockProps.cons[0]);

    expect(productNegativeNote).toBeInTheDocument();
    expect(productNegativeNotesTitle).toBeInTheDocument();
  });
});
