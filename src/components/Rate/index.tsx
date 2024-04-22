import * as React from "react";
import Rating from "@mui/material/Rating";

interface RateType {
  value: number;
  size: string;
}

export default function RatingSize({ value, size }: RateType) {
  const ratingValue = typeof value === "number" ? value : parseInt(value, 10);
  return (
    <div>
      <Rating name={size} defaultValue={ratingValue} size="large" />
    </div>
  );
}
