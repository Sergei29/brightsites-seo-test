import React from "react";
import Image from "next/image";

import { ProductData } from "@/types";

import ReviewNotes from "../ReviewNotes";
import classes from "./ProductCard.module.css";

type Props = {
  pros: string[];
  cons: string[];
} & Pick<ProductData, "title" | "image" | "price" | "vendorLink" | "rating">;

const ProductCard = ({
  title,
  image,
  price,
  vendorLink,
  rating,
  pros,
  cons,
}: Props): JSX.Element => {
  const { imageSize } = image.data.extra;

  return (
    <div className={classes.card}>
      <a href={vendorLink} role="link">
        <Image
          src={image.data.url}
          alt={image.data.title}
          width={imageSize.width}
          height={imageSize.height}
          role="img"
        />
        <h2>{title}</h2>
        <p>Price: &pound; {price}</p>
        <p>Rating: {rating}</p>
        <ReviewNotes title="Pros:" notes={pros} />
        <ReviewNotes title="Cons:" notes={cons} />
      </a>
    </div>
  );
};

export default ProductCard;
