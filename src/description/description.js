import React from "react";
import { DescriptionButton } from "./styled";

const Description = ({ text, onShowMore, isShowAllDescription }) => (
  <>
    {text}
    <DescriptionButton type="button" onClick={onShowMore}>
      {isShowAllDescription ? "Cкрыть" : "Подробнее"}
    </DescriptionButton>
  </>
);

export default Description;
