import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputButton from ".";
import { AddIcon } from "public/icons";

describe("InputButton Component", () => {
  it("renders the button with the provided text", () => {
    render(<InputButton text="Click Me" onClick={() => {}} />);

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("calls onClick when the button is clicked", () => {
    const mockOnClick = jest.fn();
    render(<InputButton text="Click Me" onClick={mockOnClick} />);

    fireEvent.click(screen.getByText("Click Me"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders an icon when one is provided", () => {
    render(<InputButton text="Click Me" onClick={() => {}} icon={AddIcon} />);

    expect(screen.getByTestId("svgComponent")).toBeInTheDocument();
  });

  it("renders the icon on the right when iconRight is true", () => {
    render(
      <InputButton
        text="Click Me"
        onClick={() => {}}
        icon={AddIcon}
        isRightIcon={true}
      />
    );

    const button = screen.getByText("Click Me").parentNode;
    expect(button).toHaveStyle("flex-direction: row-reverse");
  });

  it("renders the icon on the left when iconRight is false or undefined", () => {
    render(
      <InputButton
        text="Click Me"
        onClick={() => {}}
        icon={AddIcon}
        isRightIcon={false}
      />
    );

    const button = screen.getByText("Click Me").parentNode;
    expect(button).toHaveStyle("flex-direction: row");
  });
});
