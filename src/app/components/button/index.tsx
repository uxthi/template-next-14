"use client";

import React from "react";
import { StyledButton, Text } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>
    <Text>{children}</Text>
  </StyledButton>
);

export default Button;
