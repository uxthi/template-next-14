import React from "react";
import { fireEvent, screen, within } from "@testing-library/react";
import Select from ".";
import { renderWithMockProviders } from "__mocks__/wrappers/render-with-mock-providers";

describe("Select Component", () => {
  const label = "Mock Label";
  const helperText = "Mock Helper Text";
  const options = ["Option 1", "Option 2", "Option 3"];
  const onChange = jest.fn();
  const mockedValue = "Option 1";

  it("displays the label", () => {
    renderWithMockProviders(
      <Select
        value={mockedValue}
        onChange={onChange}
        label={label}
        options={options}
      />
    );
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("displays the helper text", () => {
    renderWithMockProviders(
      <Select
        onChange={onChange}
        value={mockedValue}
        label={label}
        options={options}
        helperText={helperText}
      />
    );
    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  it("displays the correct options", () => {
    renderWithMockProviders(
      <Select
        value={mockedValue}
        onChange={onChange}
        label={label}
        options={options}
      />
    );

    fireEvent.mouseDown(screen.getByText("Option 1"));

    const listbox = screen.getByRole("listbox");

    options.forEach((option) => {
      expect(within(listbox).getByText(option)).toBeInTheDocument();
    });
  });
});
