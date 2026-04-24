"use client";
import { Heading } from "./common/Heading";
import Paragraph from "./common/Paragraph";
import { PICK_SERVICE_DATA } from "@/utils/helper";
import Icons from "./common/Icons";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Button from "./common/Button";

const PickService = () => {
  const swiperRef = useRef();
  return (
    <div className="bg-cream pb-16 sm:pb-24 lg:pb-30" id="services">
      <div className="mt-16 sm:mt-24 lg:mt-30 max-w-327 w-full mx-auto flex flex-col items-center px-5 xl:px-0">
        <div className="flex flex-col gap-8 sm:gap-12.5 w-full">
          <div className="max-w-285 w-full mx-auto flex flex-col lg:flex-row justify-between gap-6 lg:gap-0 ">
            <Heading
              text={`Pick from `}
              spanText={"Our Services"}
              className={
                "max-w-full lg:max-w-80.5 w-full text-center lg:text-left"
              }
              spanClassName="text-green leading-120"
            />
            <Paragraph
              text={
                "From worn out fabrics to flawless finishes, our expert craftsmanship turns tired furniture into pieces you'll be proud to showcase."
              }
              className={"max-w-full lg:max-w-106.75 text-center lg:text-left"}
            />
          </div>
          <div className="hidden sm:flex justify-between w-full items-center gap-3 sm:gap-6">
            <span
              className="flex items-center cursor-pointer rounded-full border border-green justify-center h-10 w-10 sm:h-15 sm:w-15 shrink-0
              group duration-300 ease-in hover:bg-green hover:border-transparent"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <Icons
                icon={"arrow"}
                className={
                  "h-6 w-6 sm:h-8.5 sm:w-8.5 rotate-90 duration-300 ease-in"
                }
                pathClass={"stroke-green group-hover:stroke-white"}
              />
            </span>
            <Swiper
              className="max-w-285 w-full mx-auto grid grid-cols-2 pb-5!"
              slidesPerView={1}
              slidesPerGroup={1}
              spaceBetween={16}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              loop
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {PICK_SERVICE_DATA.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative mr-0! rounded-2xl border border-green/20 overflow-hidden p-4 sm:p-3 md:p-5 flex flex-col
                    hover:shadow-[0px_4px_25px_0px_rgba(1,1,1,0.1)] duration-300 ease-linear justify-between h-72 sm:h-86 md:h-80.25"
                  >
                    <div className="flex flex-col gap-4">
                      <Icons icon={item.svg} />
                      <div className="flex flex-col gap-3 text-blacky">
                        <h4 className="text-lg sm:text-2xl font-semibold leading-130">
                          {item.title}
                        </h4>
                        <p className="leading-160 text-sm sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <a
                      href=""
                      className="flex gap-1 text-green font-semibold leading-160 text-sm sm:text-base"
                    >
                      Learn More
                      <Icons icon={"learnMoreArrow"} />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <span
              className="flex items-center cursor-pointer rounded-full border border-green justify-center h-10 w-10 sm:h-15 sm:w-15 shrink-0 group duration-300 ease-in hover:bg-green hover:border-transparent"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <Icons
                icon={"arrow"}
                className={
                  "h-6 w-6 sm:h-8.5 sm:w-8.5 rotate-270 duration-300 ease-in"
                }
                pathClass={"stroke-green group-hover:stroke-white"}
              />
            </span>
          </div>
          <div className="grid sm:hidden gap-5">
            {PICK_SERVICE_DATA.map((item, index) => (
              <div
                key={index}
                className="relative mr-0! rounded-2xl border border-green/20 overflow-hidden p-4 sm:p-5 flex flex-col
                    hover:shadow-[0px_4px_25px_0px_rgba(1,1,1,0.1)] duration-300 ease-linear justify-between h-72 sm:h-80.25"
              >
                <div className="flex flex-col gap-4">
                  <Icons icon={item.svg} />
                  <div className="flex flex-col gap-3 text-blacky">
                    <h4 className="text-lg sm:text-2xl font-semibold leading-130">
                      {item.title}
                    </h4>
                    <p className="leading-160 text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
                <a
                  href=""
                  className="flex gap-1 text-green font-semibold leading-160 text-sm sm:text-base items-center"
                >
                  Learn More
                  <Icons icon={"learnMoreArrow"} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <Button
          text={"View All Services"}
          className={"px-7 py-3 mt-2.5 w-fit"}
          variant="primary"
        />
      </div>
    </div>
  );
};

export default PickService;
