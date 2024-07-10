"use client";

import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Label from "../label";
import { Container } from "./styles";

interface RadioOptionsProps {
  name: string;
  required: boolean;
  helperText: string;
  options?: string[];
  tooltip?: string;
  value: string;
  onChange: (selected: string) => void;
}

const RadioOptions: React.FC<RadioOptionsProps> = ({
  name,
  required,
  helperText,
  options,
  tooltip,
  value,
  onChange,
}) => (
  <Container>
    <Label
      required={required}
      title={name}
      description={helperText}
      tooltip={tooltip}
    />
    <FormControl component="fieldset">
      <RadioGroup
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options?.map((option, index) => (
          <FormControlLabel
            key={index}
            control={<Radio />}
            label={option}
            value={option}
          />
        ))}
      </RadioGroup>
    </FormControl>
  </Container>
);

export default RadioOptions;
