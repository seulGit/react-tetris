import React from "react";
import { StyledHoldButton } from "./styles/StyledHoldButton";

const HoldButton = ({ hold , text }) => (
  <StyledHoldButton onClick={hold}>{text}</StyledHoldButton>
);

export default HoldButton;
