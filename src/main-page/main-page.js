import React, { useState } from "react";
import { Link } from "react-router-dom";
import Line from "/src/line/line";
import Description from "/src/description/description";
import { Wrapper, Nav} from "/src/layout/styled";
import { MainTitle, StyledSlider, DescriptionWrapper } from "./styles";

export default function MainPage ({data}) {
  const MAX_TEXT_SIZE = 200;
  const [isShowAll, setIsShowAll] = useState(false);
  return (
  <Wrapper>
    <Nav>
      <Link to="/catalog">Каталог</Link>
    </Nav>
    <MainTitle>  
      Магазин 3D принтеров 
    </MainTitle>
    <Line />
    <StyledSlider images={data.images} width={535} height={281} />
    <Line />
    <DescriptionWrapper>
      <Description
            text={
              isShowAll
                ? data.text
                : data.text.slice(0, MAX_TEXT_SIZE)
            }
            onShowMore={() => setIsShowAll(!isShowAll)}
            isShowAllDescription={isShowAll}
          />
    </DescriptionWrapper>    
  </Wrapper>
  )
};
