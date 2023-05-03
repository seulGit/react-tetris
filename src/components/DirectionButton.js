import React from "react";
import { StyledDirectionButton } from "./styles/StyledDirectionButton";

const DirectionButton = ({ move, text }) => (
  <StyledDirectionButton onClick={move}>{text}</StyledDirectionButton>
);

export default DirectionButton;
