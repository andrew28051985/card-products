import styled from "styled-components";

const Title = styled.h1.attrs((props) => ({
  children: `${props.children}`
}))`
  margin: 0;
  padding: 0;
  font-size: ${(props) => (props.small ? 20 : 34)}px;
`;

export default Title;
