import styled from "styled-components";
import Title from "/src/title/title";

export const StyledTitle = styled(Title)`
  margin: 0;
  padding: 0;
  font-size: ${(props) => (props.small ? 20 : 34)}px;
`;