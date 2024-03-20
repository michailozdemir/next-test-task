import clsx from "clsx";
import React from "react";

interface TextProps {
  children: React.ReactNode;
  weight?: "medium" | "semibold";
}

const Text = ({ children, weight = "medium" }: TextProps) => {
  return <p className={clsx(textVariant.weight[weight], "text-base text-gray")}>{children}</p>;
};

const textVariant = {
  weight: {
    medium: "font-medium",
    semibold: "font-semibold",
  },
};

export default Text;
