import React from "react";
import { screen } from "@testing-library/react";
import TextInput from ".";
import { renderWithMockProviders } from "__mocks__/wrappers/render-with-mock-providers";

describe("TextInput Component", () => {
  describe("when a label is provided", () => {
    it("renders correctly", () => {
      renderWithMockProviders(<TextInput label="Test Label" />);
      const labels = screen.getAllByText("Test Label");
      expect(labels).toHaveLength(1);
    });
  });

  describe("when no label is provided", () => {
    it("renders correctly", () => {
      renderWithMockProviders(<TextInput />);
      expect(screen.queryByText("Test Label")).not.toBeInTheDocument();
    });
  });

  describe("when multiline is true", () => {
    it("renders as a multiline text field", () => {
      renderWithMockProviders(<TextInput label="Test Label" multiline />);
      expect(screen.getByRole("textbox")).toHaveAttribute("rows", "4");
    });

    it("defaults to 4 rows", () => {
      renderWithMockProviders(<TextInput label="Test Label" multiline />);
      expect(screen.getByRole("textbox")).toHaveAttribute("rows", "4");
    });
  });

  describe("when multiline is false", () => {
    it("renders as a single line text field", () => {
      renderWithMockProviders(
        <TextInput label="Test Label" multiline={false} />
      );
      expect(screen.getByRole("textbox")).toHaveAttribute("rows", "1");
    });

    it("defaults to 1 row", () => {
      renderWithMockProviders(
        <TextInput label="Test Label" multiline={false} />
      );
      expect(screen.getByRole("textbox")).toHaveAttribute("rows", "1");
    });
  });

  describe("when the helperText prop is provided", () => {
    it("displays helper text", () => {
      renderWithMockProviders(
        <TextInput label="Test Label" helperText="Helper Text" />
      );
      expect(screen.getByText("Helper Text")).toBeInTheDocument();
    });
  });
});
