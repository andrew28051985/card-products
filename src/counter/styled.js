import styled from "styled-components";

export const StyledCounter = styled.span`
  display: inline-flex;
`;

export const Value = styled.span`
  font-size: ${(props) => props.theme.indent};
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
`;
