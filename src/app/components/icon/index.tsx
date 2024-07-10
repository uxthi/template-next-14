"use client";

import { SVGProps, useState } from "react";
import Tooltip from "@mui/material/Tooltip";

export interface IIcon {
  SVGComponent: React.ComponentType<SVGProps<SVGElement>>;
  height?: string | number;
  width?: string | number;
  color?: string;
  hoverColor?: string;
  onClick?: () => void;
  customStyles?: React.CSSProperties;
  tooltip?: string;
}

const Icon: React.FC<IIcon> = ({
  SVGComponent,
  height = 32,
  width = 32,
  color,
  hoverColor,
  onClick,
  customStyles,
  tooltip,
  ...props
}: IIcon) => {
  const [changeColor, setChangeColor] = useState<string | undefined>(color);

  const handleMouseEnter = () => {
    if (hoverColor) {
      setChangeColor(hoverColor);
    }
  };

  const handleMouseLeave = () => {
    if (color) {
      setChangeColor(color);
    }
  };

  const svgStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...customStyles,
    ...(color || hoverColor ? { fill: changeColor } : {}),
  };

  const iconElement = (
    <SVGComponent
      data-testid="svgComponent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      width={width}
      height={height}
      onClick={onClick}
      style={svgStyle}
      {...props}
    />
  );

  const renderComponent = () => {
    if (tooltip) {
      return (
        <Tooltip title={tooltip} arrow>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {iconElement}
          </div>
        </Tooltip>
      );
    }

    return iconElement;
  };

  return renderComponent();
};

export default Icon;
