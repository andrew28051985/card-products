import styled from "styled-components";

const Price = styled.b.attrs((props) => ({
  children: `${props.value} ₽`
}))`
  font-size: 28px;
  line-height: 1;
`;

export default Price;
