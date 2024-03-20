import React from "react";
import clsx from "clsx";
import { poppins } from "./Fonts";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size: "h1" | "h3";

  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ size, children }: TitleProps) => {
  const Tag = size as keyof JSX.IntrinsicElements;

  return <Tag className={clsx(titleVariants.size[size], poppins.className, "font-bold")}>{children}</Tag>;
};

const titleVariants = {
  size: {
    h1: "lg:text-[54px] lg:leading-[56px] text-[40px] leading-[44px] text-darkBlue",
    h3: "text-[24px] leading-[32px] text-gray",
  },
};

export default Title;
