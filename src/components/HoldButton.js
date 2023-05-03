import React from "react";
import { StyledHoldButton } from "./styles/StyledHoldButton";

const HoldButton = ({ text, hold }) => (
  <StyledHoldButton onClick={hold}>{text}</StyledHoldButton>
);

export default HoldButton;
