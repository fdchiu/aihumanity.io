import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[18px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    light_blue_A700: "bg-light_blue-A700 shadow-xs text-gray-300",
    gray_900_01: "bg-gray-900_01",
  },
  outline: {
    white_A700_1c_white_A700_1c: "border border-solid white_A700_1c_white_A700_1c_border bg-gradient text-gray-300",
  },
};
const sizes = {
  md: "h-[44px] px-2 text-xl",
  xs: "h-[36px] px-1.5 text-xl",
  sm: "h-[40px] px-2.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "gray_900_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["light_blue_A700", "gray_900_01", "white_A700_1c_white_A700_1c"]),
};

export { Button };
