import React from "react";

interface ServicesListProps {
  children: React.ReactNode;
}

const ServicesList = ({ children }: ServicesListProps) => {
  return <ul className="flex gap-6 md:gap-x-[30px] md:gap-y-[40px] flex-wrap">{children}</ul>;
};

export default ServicesList;
