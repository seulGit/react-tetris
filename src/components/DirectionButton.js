import React from "react";
import { StyledDirectionButton } from "./styles/StyledDirectionButton";

const DirectionButton = ({ text , move }) => (
  <StyledDirectionButton onClick={move}>{text}</StyledDirectionButton>
);

export default DirectionButton;
