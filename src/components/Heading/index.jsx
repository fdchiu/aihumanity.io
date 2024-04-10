import React from "react";

const sizes = {
  "3xl": "text-6xl font-semibold md:text-[52px] sm:text-[46px]",
  "2xl": "text-5xl font-semibold md:text-[44px] sm:text-[38px]",
  xl: "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  "5xl": "text-9xl font-semibold md:text-5xl",
  "4xl": "text-[110px] font-bold md:text-5xl",
  s: "text-sm font-semibold",
  md: "text-xl font-semibold",
  xs: "text-xs font-bold",
  lg: "text-2xl font-semibold md:text-[22px]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-franie ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
