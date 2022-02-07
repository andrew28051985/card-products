import React from "react";
import { Link } from "react-router-dom";
import { Image } from "/src/elements";
import FullPrice from "/src/full-price/full-price";
import { List, ListItem, StyledLink, TitleCatalog } from "./styled";
import { Wrapper, Nav } from "/src/layout/styled";

export default function Catalog({ products }) {
  return (
    <>
      <Wrapper>
        <Nav>
          <Link to="/">Главная</Link>
        </Nav>
      
      <TitleCatalog>Каталог</TitleCatalog>
      <List>
        {products &&
          products.length &&
          products.map((product) => (
            <ListItem key={product.code}>
              <StyledLink to={`/product/${product.code}`}>
                <Image src={product.images[0]} />
                <h2>{product.name}</h2>
                <span>
                  <FullPrice
                    oldPrice={product.oldPrice}
                    price={product.price}
                  />
                </span>
              </StyledLink>
            </ListItem>
          ))}
      </List>
      </Wrapper>
    </>
  );
}
