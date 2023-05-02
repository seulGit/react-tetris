import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback} onKeyDown={(e) => { callback(e); }}>START GAME</StyledStartButton>
);

export default StartButton;
