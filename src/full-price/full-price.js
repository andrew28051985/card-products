import React from "react";
import OldPrice from "/src/old-price/old-price";
import { InnerPrice, PriceWrapper } from "./styled";

const FullPrice = ({ oldPrice, price }) => {
  const showOldPrice = oldPrice && price < oldPrice;

  return (
    <PriceWrapper>
      {Number(showOldPrice)
        ? showOldPrice && <OldPrice value={oldPrice} />
        : ""}
      {Number(showOldPrice) ? showOldPrice && " " : ""}
      <InnerPrice value={price} />
    </PriceWrapper>
  );
};

export default FullPrice;
