import { IMaskInput, IMask } from 'react-imask';
import React from "react";
import { InputBaseComponentProps } from '@mui/material';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  mask: typeof IMask.Masked
  name: string;
}

export const MaskedInput = React.forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, mask, ...otherProps } = props;
    return (
      <IMaskInput
        {...otherProps}
        mask={mask}
        inputRef={ref}
        onAccept={(value: string) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
) as unknown as React.ElementType<InputBaseComponentProps>