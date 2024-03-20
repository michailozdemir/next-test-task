import React from "react";
import clsx from "clsx";
import { poppins } from "./Fonts";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, children }: ButtonProps) => {
  return (
    <button className={clsx(buttonVariants.variants[variant], buttonVariants.default, poppins.className)}>
      {children}
    </button>
  );
};

const buttonVariants = {
  default:
    "px-[58px] py-[21px] rounded-[12px] font-semibold text-[17px] leading-[17px] uppercase tracking-[3px] transition-opacity duration-200 ease-in-out",
  variants: {
    primary: "bg-darkBlue text-white hover:opacity-90",
  },
};

export default Button;
