"use client";

import React from "react";
import { Checkbox, FormControl, FormControlLabel } from "@mui/material";
import Label from "../label";
import { Container } from "./styles";

interface ChecklistProps {
  name: string;
  required: boolean;
  helperText: string;
  options?: string[];
  tooltip?: string;
  value: string[];
  onChange: (selected: string[]) => void;
}

const Checklist: React.FC<ChecklistProps> = ({
  name,
  required,
  helperText,
  options = [],
  tooltip,
  value,
  onChange,
}) => {
  const handleCheckboxChange = (option: string) => {
    const newValue = value?.includes(option)
      ? value.filter((item) => item !== option)
      : [...value, option];
    onChange(newValue);
  };

  return (
    <Container>
      <Label
        required={required}
        title={name}
        description={helperText}
        tooltip={tooltip}
      />
      <FormControl>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={value.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
            }
            label={option}
          />
        ))}
      </FormControl>
    </Container>
  );
};

export default Checklist;
