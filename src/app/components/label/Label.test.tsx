import React from "react";
import { screen } from "@testing-library/react";
import Label from ".";
import { IIcon } from "../icon";
import { renderWithMockProviders } from "__mocks__/wrappers";

jest.mock("../icon", () => {
  const MockIcon = (props: IIcon) => (
    <div data-testid="icon" {...props}>
      {props.tooltip}
    </div>
  );
  MockIcon.displayName = "MockIcon";
  return MockIcon;
});

describe("Label", () => {
  it("renders title and description", () => {
    renderWithMockProviders(
      <Label
        title="Test Title"
        description="Test Description"
        required={false}
      />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  describe("when required is true", () => {
    it("renders an asterisk", () => {
      renderWithMockProviders(
        <Label
          title="Test Title"
          description="Test Description"
          required={true}
        />
      );

      expect(screen.getByText("Test Title*")).toBeInTheDocument();
    });
  });

  describe("when passing a tooltip text", () => {
    it("renders tooltip icon", () => {
      renderWithMockProviders(
        <Label
          title="Test Title"
          description="Test Description"
          tooltip="Test Tooltip"
          required={false}
        />
      );

      expect(screen.getByTestId("icon")).toBeInTheDocument();
      expect(screen.getByTestId("icon")).toHaveTextContent("Test Tooltip");
    });
  });
});
