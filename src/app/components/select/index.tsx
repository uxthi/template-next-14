"use client";

import React from "react";
import { Container, StyledMenuItem, StyledSelect } from "./styles";
import Label from "../label";
import { SelectChangeEvent } from "@mui/material/Select";

interface SelectProps {
  options?: string[];
  label: string;
  helperText?: string;
  required?: boolean;
  tooltip?: string;
  fullWidth?: boolean;
  value: string;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  label,
  helperText,
  required,
  tooltip,
  fullWidth,
  value,
  onChange,
}) => (
  <Container fullWidth={fullWidth}>
    <Label
      required={required}
      title={label}
      description={helperText}
      tooltip={tooltip}
    />
    <StyledSelect labelId={label} value={value} onChange={onChange}>
      {options?.map((option, index) => (
        <StyledMenuItem key={index} value={option}>
          {option}
        </StyledMenuItem>
      ))}
    </StyledSelect>
  </Container>
);

export default Select;
