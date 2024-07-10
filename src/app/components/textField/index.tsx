import React from "react";
import { InputAdornment } from "@mui/material";
import Label from "../label";
import { Container, StyledTextField } from "./styles";
import { getMask } from "./maskedInput/masks";
import { MaskedInput } from "./maskedInput";

export enum CurrencyAdornment {
  BRL = "R$",
  USD = "$",
}

interface ITextInput {
  label?: string;
  multiline?: boolean;
  type?: string;
  rows?: number;
  required?: boolean;
  helperText?: string;
  tooltip?: string;
  fullWidth?: boolean;
  currencyAdornment?: CurrencyAdornment;
  mask?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<ITextInput> = ({
  label,
  multiline,
  type,
  required,
  helperText,
  tooltip,
  fullWidth,
  currencyAdornment,
  placeholder,
  value,
  onChange,
  mask,
}) => {
  const inputProps = currencyAdornment
    ? {
        startAdornment: (
          <InputAdornment position="start">{currencyAdornment}</InputAdornment>
        ),
      }
    : {};

  const maskProps = mask ? getMask(mask) : {};

  return (
    <Container>
      <Label
        required={required}
        title={label ?? ""}
        description={helperText}
        tooltip={tooltip}
      />
      <StyledTextField
        variant="outlined"
        multiline={multiline}
        rows={multiline ? 4 : 1}
        type={type}
        fullWidth={fullWidth}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        InputProps={{
          ...inputProps,
          inputComponent: mask ? MaskedInput : undefined,
          inputProps: mask ? { ...maskProps } : undefined,
        }}
      />
    </Container>
  );
};

export default TextInput;
