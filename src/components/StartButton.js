import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>CHANGED?!</StyledStartButton>
);

export default StartButton;
