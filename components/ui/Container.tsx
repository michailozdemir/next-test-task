import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return <div className="max-w-[1400px] mx-auto px-4">{children}</div>;
};

export default Container;
