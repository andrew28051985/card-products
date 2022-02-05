import styled from "styled-components";

export const Label = styled.label`
  margin: 0;
  padding: 0;
  display: flex;
  margin-bottom: 20px;
  padding: 5px 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & + button {
    margin: 0 auto;
  }
`;

export const Input = styled.input`
  margin: 0;
  padding: 0;
  width: 70%;
  padding: 5px 10px;
  border: 1px solid ${(props) => props.theme.textColorMute};
`;
