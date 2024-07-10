import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";
import Button from ".";
import { renderWithMockProviders } from "__mocks__/wrappers";

const mockOnClick = jest.fn();

describe("Button", () => {
  it("shows text passed as childrem", () => {
    renderWithMockProviders(<Button onClick={mockOnClick}>Test</Button>)

    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    renderWithMockProviders(<Button onClick={mockOnClick}>Test</Button>);

    const button = screen.getByText("Test");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
