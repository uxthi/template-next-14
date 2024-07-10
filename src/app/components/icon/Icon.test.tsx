import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { AddIcon } from "public/icons";
import Icon from ".";

describe("Icon", () => {
  it("renders Icon component successfully", () => {
    const { getByTestId } = render(<Icon SVGComponent={AddIcon} />);
    const svgElement = getByTestId("svgComponent");

    expect(svgElement).toBeVisible();
  });

  it("uses default width and height when width and height are not provided", () => {
    const { getByTestId } = render(<Icon SVGComponent={AddIcon} />);
    const svgElement = getByTestId("svgComponent");

    expect(svgElement).toHaveAttribute("width", "32");
    expect(svgElement).toHaveAttribute("height", "32");
  });

  it("applies custom styles", () => {
    const customStyles = { backgroundColor: "red" };

    const { getByTestId } = render(
      <Icon SVGComponent={AddIcon} customStyles={customStyles} />
    );
    const svgElement = getByTestId("svgComponent");

    expect(svgElement).toHaveStyle("background-color: red");
  });

  it("changes color on hover", () => {
    const { getByTestId } = render(
      <Icon SVGComponent={AddIcon} color="black" hoverColor="red" />
    );

    const icon = getByTestId("svgComponent");
    expect(icon).toHaveStyle("fill: black");

    fireEvent.mouseEnter(icon);
    expect(icon).toHaveStyle("fill: red");

    fireEvent.mouseLeave(icon);
    expect(icon).toHaveStyle("fill: black");
  });

  it("handles onClick event", () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <Icon SVGComponent={AddIcon} onClick={handleClick} />
    );
    const svgElement = getByTestId("svgComponent");

    fireEvent.click(svgElement);

    expect(handleClick).toHaveBeenCalled();
  });
});
