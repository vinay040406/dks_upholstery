import Image from "next/image";
import { Heading } from "./common/Heading";
import Icons from "./common/Icons";
import Paragraph from "./common/Paragraph";
import { BEFORE_AFTER_DATA } from "@/utils/helper";
import Quote from "./Quote";
import WhatsAppNow from "./common/WhatsAppNow";

const Hero = () => {
  return (
    <div
      className="w-full bg-[url('/images/webp/hero-bg-image.webp')] bg-cover flex-col bg-center bg-no-repeat relative min-h-[125] md:min-h-215.25 pt-5 md:pt-15 lg:pt-29 lg:pb-40 flex items-center"
      id="home"
    >
      <div className="flex flex-col lg:flex-row max-w-285 w-full mx-auto items-center justify-between -translate-y-6 md:-translate-y-12 px-4 xl:px-0 gap-10 lg:gap-0 pt-20  pb-14 lg:py-0">
        <div className="flex flex-col gap-4 max-w-full lg:max-w-107.75 relative items-center lg:items-start backdrop-blur-sm pb-10 sm:pb-0 sm:backdrop-blur-none">
          <div className="flex flex-col gap-1.5">
            <span className="text-blacky font-medium leading-120">
              Highly Rated on Google
            </span>
            <div className="flex gap-3 items-center">
              <Icons icon={"google"} />
              <ul className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Icons key={item} icon={"rating"} />
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-7.5 items-center lg:items-start">
            <div className="flex flex-col gap-4 max-w-107.75 lg:max-w-full">
              <Heading
                text={"Upholstery Services "}
                className={"text-green text-center lg:text-left"}
                spanText={"Trusted Across Singapore"}
                spanClassName={"text-black "}
              />
              <Paragraph
                className={"pr-2 lg:text-left text-center"}
                text={
                  "Complete upholstery solutions for homes and businesses sofas, cushions, built ins, headboards, and more."
                }
              />
            </div>
            <WhatsAppNow text={"WhatsApp Us Now"} />
          </div>
          <Icons
            icon={"vector"}
            className={
              "absolute -bottom-4 sm:-bottom-16 md:-bottom-25 lg:-bottom-18 lg:right-9 block h-16.5 w-10.5 rotate-45 md:rotate-0 md:w-37.5 md:h-30.75 pointer-events-none"
            }
          />
        </div>
        <div className="flex flex-col gap-8 w-full items-center lg:items-end min-h-80 sm:min-h-120 lg:min-h-153.25 relative py-10 lg:translate-y-8 pr-4 sm:pr-10 lg:pr-23 md:mt-20 lg:mt-0 px-5 sm:px-0">
          {BEFORE_AFTER_DATA.map((item, index) => (
            <div
              key={index}
              className={`relative bg-grey w-full -rotate-15 h-40 sm:h-50 lg:h-62.75 max-w-70 sm:max-w-90 lg:max-w-93.25`}
            >
              <div
                className={`relative ${
                  item.text === "Before &"
                    ? "h-35 sm:h-45 lg:h-57.25 max-w-full translate-y-4 lg:translate-y-6"
                    : "h-35 sm:h-45 lg:h-56.5 max-w-full translate-y-5 lg:translate-y-9"
                }`}
              >
                <Image
                  src={item.image}
                  fill
                  alt={item.text}
                  className={`${
                    item.text === "Before &"
                      ? "object-contain rotate-12"
                      : "object-contain bottom-0"
                  } object-center`}
                />
              </div>
              <span
                className={`absolute text-sm sm:text-base lg:text-xl font-semibold leading-100 z-10 text-blacky right-4 top-4`}
              >
                {item.text}
              </span>
            </div>
          ))}
          <Icons
            icon={"star1"}
            className={
              "absolute right-0 bottom-0 lg:top-20 lg:right-150 pointer-events-none h-9.75 w-9.75 md:h-15.5 md:w-15.5"
            }
          />
          <Icons
            icon={"star2"}
            className={
              "absolute left-0 block sm:hidden pointer-events-none top-1/2"
            }
          />
          <Image
            src={"/images/webp/warranty.webp"}
            height={127}
            width={127}
            alt="warranty"
            className="absolute -bottom-3 md:-bottom-10 right-60 md:right-120 lg:right-0 lg:bottom-5 object-cover object-center h-16 w-16 sm:h-20 sm:w-20 lg:h-31.75 lg:w-31.75 block max-[374]:hidden"
          />
        </div>
      </div>
      <div className="lg:absolute -bottom-30 w-full flex justify-center">
        <Quote />
      </div>
    </div>
  );
};

export default Hero;
