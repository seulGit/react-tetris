import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>START GAME</StyledStartButton>
);

export default StartButton;
