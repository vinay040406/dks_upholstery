import React from "react";
import Marque from "./Marque";
import Icons from "./common/Icons";
import Paragraph from "./common/Paragraph";
import { SERVICE_DATA } from "@/utils/helper";

const Trusted = () => {
  return (
    <div className="flex flex-col w-full gap-12 sm:gap-20 mt-24 sm:mt-36 lg:mt-50 items-center px-5 xl:px-0">
      <div className="flex flex-col gap-8 items-center w-full">
        <h2 className="text-xl font-semibold leading-160 text-gray italic">
          Trusted Our Service
        </h2>
        <Marque />
      </div>
      <div className="max-w-285 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {SERVICE_DATA.map((item, index) => (
          <div
            key={index}
            className="flex border border-green/20 p-5 gap-5 items-center rounded-2xl hover:border-transparent hover:shadow duration-300 ease-in"
          >
            <span className="h-15 w-15 shrink-0 rounded-full flex justify-center items-center bg-blue">
              <Icons
                icon={item.svg}
                pathClass={item.svg === "rating" ? "fill-white" : ""}
              />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl sm:text-custom-2xl leading-120 text-blacky font-semibold italic">
                {item.title}
              </h3>
              <Paragraph
                className={"leading-120 text-sm sm:text-base "}
                text={item.description}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trusted;
