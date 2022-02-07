import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Nav } from "./styled";

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Nav>
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
      </Nav>
      <main>{children}</main>
    </Wrapper>
  );
}
