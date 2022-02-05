import styled from "styled-components";

const Article = styled.span.attrs((props) => ({
  children: `Артикул: ${props.children}`
}))`
  color: ${(props) => props.theme.textColorMuted};
  font-size: 12px;
`;

export default Article;
