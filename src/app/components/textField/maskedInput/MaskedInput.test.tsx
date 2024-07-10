import { TextField } from "@mui/material";
import { renderWithMockProviders } from "__mocks__/wrappers";
import { MaskedInput } from ".";
import {
  currencyMask,
  phoneMask,
  taxIdMask,
} from "@/components/textField/maskedInput/masks";
import { fireEvent, screen } from "@testing-library/react";

const renderTextFieldWithMask = (mask: object, placeholder: string) => {
  return renderWithMockProviders(
    <div>
      <TextField
        placeholder={placeholder}
        InputProps={{
          inputComponent: MaskedInput,
          inputProps: {
            ...mask,
          },
        }}
      />
    </div>
  );
};

describe("MaskedInput component", () => {
  it("should mask phone number", () => {
    const fakeNumber = "1212345678";
    const placeholderField = "Insert the phone number";

    renderTextFieldWithMask(phoneMask, placeholderField);

    const input =
      screen.getByPlaceholderText<HTMLInputElement>(placeholderField);

    fireEvent.change(input, { target: { value: fakeNumber } });
    fireEvent.blur(input);

    expect(input.value).toBe("(12) 1234-5678");
  });

  it("should mask currency", () => {
    const fakeNumber = "644624,22";
    const placeholderField = "Insert the currency";

    renderTextFieldWithMask(currencyMask, placeholderField);

    const input =
      screen.getByPlaceholderText<HTMLInputElement>(placeholderField);

    fireEvent.change(input, { target: { value: fakeNumber } });
    fireEvent.blur(input);

    expect(input.value).toBe("644.624,22");
  });

  it("should mask tax CPF input", () => {
    const fakeNumber = "51140222023";
    const placeholderField = "Insert the currency";

    renderTextFieldWithMask(taxIdMask, placeholderField);

    const input =
      screen.getByPlaceholderText<HTMLInputElement>(placeholderField);

    fireEvent.change(input, { target: { value: fakeNumber } });
    fireEvent.blur(input);

    expect(input.value).toBe("511.402.220-23");
  });

  it("should mask tax CNPJ input", () => {
    const fakeNumber = "73334536000117";
    const placeholderField = "Insert the currency";

    renderTextFieldWithMask(taxIdMask, placeholderField);

    const input =
      screen.getByPlaceholderText<HTMLInputElement>(placeholderField);

    fireEvent.change(input, { target: { value: fakeNumber } });
    fireEvent.blur(input);

    expect(input.value).toBe("73.334.536/0001-17");
  });
});
