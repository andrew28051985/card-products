import React from "react";
import Button from "/src/button/button";
import { StyledCounter, Value } from "./styled";

const Counter = ({ value, onChange, minValue }) => {
  const isDisabledButton = minValue === value;

  return (
    <StyledCounter>
      <Button
        type="button"
        size="small"
        disabled={isDisabledButton}
        onClick={() => onChange && onChange(value - 1)}
      >
        -
      </Button>{" "}
      <Value>{value}</Value>{" "}
      <Button
        type="button"
        size="small"
        onClick={() => onChange && onChange(value + 1)}
      >
        +
      </Button>
    </StyledCounter>
  );
};

export default Counter;
