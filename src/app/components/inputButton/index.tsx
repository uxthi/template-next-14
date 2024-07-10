"use client";

import React from "react";
import { ButtonContainer, Text } from "./styles";
import Icon from "../icon";
import theme from "@/styles/theme";

interface InputButtonProps {
  text: string;
  onClick: () => void;
  icon?: React.FC;
  isRightIcon?: boolean;
  width?: number | string;
}

const InputButton: React.FC<InputButtonProps> = ({
  text,
  onClick,
  icon,
  isRightIcon,
  width,
}) => (
  <ButtonContainer
    width={width || 193}
    is-right-icon={isRightIcon || false}
    onClick={onClick}
  >
    {!!icon && (
      <Icon
        SVGComponent={icon}
        color={theme.palette.primary?.["500"]}
        width={18}
        height={18}
      />
    )}
    <Text>{text}</Text>
  </ButtonContainer>
);

export default InputButton;
