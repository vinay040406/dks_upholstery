import { ABOUT_US_DATA } from "@/utils/helper";
import Button from "./common/Button";
import { Heading } from "./common/Heading";
import Paragraph from "./common/Paragraph";
import Image from "next/image";

const AboutUs = ({ id }) => {
  return (
    <div
      className="max-w-285 w-full mx-auto mt-16 sm:mt-24 lg:mt-30 flex flex-col lg:flex-row justify-between items-center scroll-mt-30 px-5 xl:px-0 gap-10 lg:gap-0"
      id="about-us"
    >
      <div className="flex flex-col gap-7.5 w-full lg:w-auto lg:items-start items-center">
        <div className="flex flex-col gap-7.5">
          <Heading
            text={"About "}
            spanText={"Us"}
            className={"text-center lg:text-left"}
            spanClassName={"text-green"}
          />

          <div className="flex flex-col gap-3 max-w-full lg:max-w-127.25 w-full">
            {ABOUT_US_DATA.map((item, index) => (
              <div
                key={index}
                className="border border-green/20 rounded-2xl p-3.5 flex flex-col gap-1"
              >
                <h5 className="text-blacky font-semibold leading-160 text-sm sm:text-base">
                  {item.title}
                </h5>
                <Paragraph text={item.description}  className={"text-sm sm:text-base"}/>
              </div>
            ))}
          </div>
        </div>
        <Button
          text={"Know More"}
          className={"px-7 py-3 w-fit"}
          variant="primary"
        />
      </div>
      <Image
        src={"/images/webp/about-us-image.webp"}
        height={614}
        width={518}
        alt="aboutUs"
        className="object-contain object-center w-full lg:w-auto h-92 sm:h-126 lg:h-120 xl:h-156.25 "
      />
    </div>
  );
};

export default AboutUs;
