"use client";

import React from "react";
import {
  Container,
  Description,
  SubtitleContainer,
  TitleContainer,
  Title,
} from "./styles";
import Icon from "../icon";
import theme from "@/styles/theme";
import { InfoIcon } from "public/icons";

interface LabelProps {
  title: string;
  description?: string;
  tooltip?: string;
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({
  title,
  description,
  tooltip,
  required = false,
}) => {
  return (
    <Container>
      <TitleContainer>
        <Title>
          {title}
          {required && "*"}
        </Title>
        {tooltip && (
          <Icon
            SVGComponent={InfoIcon}
            color={theme.palette.common?.white}
            width={16}
            height={16}
            tooltip={tooltip}
            customStyles={{ marginLeft: 3 }}
          />
        )}
      </TitleContainer>
      {description && (
        <SubtitleContainer>
          <Description>{description}</Description>
        </SubtitleContainer>
      )}
    </Container>
  );
};

export default Label;
