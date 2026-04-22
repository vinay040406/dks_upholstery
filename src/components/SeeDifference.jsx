"use client";
import React, { useRef } from "react";
import { Heading } from "./common/Heading";
import Paragraph from "./common/Paragraph";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { DIFFERENCE_DATA } from "@/utils/helper";
import Image from "next/image";
import Icons from "./common/Icons";
import Button from "./common/Button";

const SeeDifference = () => {
  const swiperRef = useRef();
  return (
    <div className="w-full bg-cream">
      <div className="max-w-314 w-full mx-auto flex flex-col mt-16 sm:mt-24 lg:mt-30 items-center px-5 xl:px-0">
        <div className="flex flex-col gap-8 sm:gap-12.5 w-full">
          <div className="max-w-285 w-full mx-auto flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
            <Heading
              text={`Before & After: ${" "}`}
              spanText={"See the Difference"}
              className={
                "max-w-full lg:max-w-111.5 w-full text-center lg:text-left"
              }
              spanClassName="text-green leading-120"
            />
            <Paragraph
              text={
                "From worn out sofas to sleek wall panels, nothing shows our work better than a side by side transformation. Slide to see the difference for yourself."
              }
              className={"max-w-full lg:max-w-106.75 text-center lg:text-left"}
            />
          </div>
          <div className="flex justify-between w-full items-center">
            <span
              className="hidden sm:flex items-center cursor-pointer mr-3 sm:mr-6 shrink-0"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <Icons
                icon={"arrow"}
                className={"h-6 w-6 sm:h-8.5 sm:w-8.5 rotate-90"}
              />
            </span>
            <Swiper
              className="max-w-285 w-full mx-auto grid grid-cols-2"
              slidesPerView={2}
              slidesPerGroup={2}
              breakpoints={{
                640: { slidesPerView: 2, slidesPerGroup: 2 },
              }}
              loop
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {DIFFERENCE_DATA.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`h-60.5 sm:h-72 lg:h-84.75 relative mr-0! sm:mr-6! ${item.before && "rounded-l-xxl"} ${item.after && "rounded-r-xxl"}  sm:rounded-xxl overflow-hidden`}
                  >
                    <Image
                      src={item.image}
                      fill
                      alt={item}
                      className="rouded-2xl overflow-hidden object-cover"
                    />
                    {item.before && (
                      <span className="absolute right-0 bottom-8 text-whity px-4 sm:px-6.5 py-1.5 rounded-l-3xl bg-blacky text-sm sm:text-xl font-bold leading-150 uppercase">
                        before
                      </span>
                    )}
                    {item.after && (
                      <span className="absolute right-0 bottom-8 text-whity px-4 sm:px-6.5 py-1.5 rounded-l-3xl bg-green text-sm sm:text-xl font-bold leading-150 uppercase">
                        after
                      </span>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <span
              className="hidden sm:flex items-center cursor-pointer shrink-0"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <Icons
                icon={"arrow"}
                className={"h-6 w-6 sm:h-8.5 sm:w-8.5 rotate-270"}
              />
            </span>
          </div>
        </div>
        <Button
          text={"See More Results"}
          className={"px-7 py-3 mt-7.5 w-fit"}
          variant="primary"
        />
      </div>
    </div>
  );
};

export default SeeDifference;
