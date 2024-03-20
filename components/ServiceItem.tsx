import React from "react";
import Title from "./ui/Title";
import Image from "next/image";
import Text from "./ui/Text";
import clsx from "clsx";

interface ServiceItemProps {
  title: string;
  description: string;
  listItems?: string[];
  images: string[];
}

const ServiceItem = ({ title, description, listItems, images }: ServiceItemProps) => {
  return (
    <li className="flex md:flex-[1_1_calc(33.333%-30px)] md:min-w-[435px] overflow-hidden rounded-lg bg-white">
      <div className="relative shrink-0 grid gap-[3px]">
        {images?.map((image) => (
          <Image
            src={image}
            alt={title}
            key={image}
            width={120}
            height={170}
            className={clsx(images.length === 1 ? "h-full" : "h-[170px]", "object-cover object-center md:w-[185px]")}
            unoptimized={true}
          />
        ))}
      </div>
      <div className="space-y-[12px] py-6 px-5 md:pl-[34px] md:pr-[30px] md:py-10">
        <Title size="h3">{title}</Title>
        <ul className="list-disc ml-[18px]">
          {listItems?.map((item) => (
            <li key={item} className="marker:text-tan">
              <Text weight="semibold">{item}</Text>
            </li>
          ))}
        </ul>
        <Text>{description}</Text>
      </div>
    </li>
  );
};

export default ServiceItem;
