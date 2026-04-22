"use client";
import React, { useRef } from "react";
import { Heading } from "./common/Heading";
import Paragraph from "./common/Paragraph";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Icons from "./common/Icons";
import { REAL_TRANSFORMATION_DATA } from "@/utils/helper";
import Image from "next/image";

const RealTransformation = () => {
  const swiperRef = useRef();
  return (
    <div
      className="flex flex-col bg-[url('/images/webp/cta.webp')] bg-cover
     bg-center bg-no-repeat pt-16 sm:pt-24 lg:pt-30 pb-16 sm:pb-24 lg:pb-30 w-full overflow-hidden "
      id="gallery"
    >
      <div className="flex flex-col gap-8 sm:gap-12.5 max-w-327 mx-auto px-5 xl:px-0 w-full">
        <div className="max-w-285 w-full mx-auto flex justify-between flex-col lg:flex-row gap-6 lg:gap-0 ">
          <Heading
            text={`Real Transformations, `}
            spanText={"Real Customers"}
            className={"max-w-full lg:max-w-137.25/106.75"}
            spanClassName="text-green leading-120"
          />
          <Paragraph
            text={
              "Every project tells a story see what other customers say about their sofas, chairs, and spaces after working with DKS Upholstery."
            }
            className={"max-w-106.75"}
          />
        </div>
        <div
          className={`flex justify-between w-full items-center gap-3 sm:gap-6`}
        >
          <span
            className="hidden sm:flex items-center cursor-pointer rounded-full border border-green justify-center h-10 w-10 sm:h-15 sm:w-15 + shrink-0
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
            className="max-w-285 w-full mx-auto grid grid-cols-2"
            slidesPerView={1}
            slidesPerGroup={1}
            loop
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {REAL_TRANSFORMATION_DATA.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-between items-center flex-col lg:flex-row gap-6 lg:gap-0">
                  <Image
                    alt={item.reviewTitle}
                    src={item.image}
                    height={380}
                    width={616}
                    className="object-cover object-center rounded-2xl  h-56 sm:h-72 lg:h-95 w-full lg:w-auto"
                  />
                  <div className="flex flex-col gap-3.75 max-w-full lg:max-w-106.75 w-full">
                    <div className="flex flex-col gap-1.25">
                      <div className="flex flex-col gap-4 sm:gap-7.5">
                        <Icons icon={"doubleComma"} />
                        <h4 className="uppercase text-base sm:text-xl font-bold leading-150 text-blacky">
                          {item.reviewTitle}
                        </h4>
                      </div>
                      <Paragraph
                        text={
                          "My sofa looks brand new! The team was professional, quick, and the finish exceeded my expectations.”"
                        }
                      />
                    </div>
                    <div className="flex gap-2.5 items-center">
                      <span className="h-11.5 w-11.5 rounded-full flex justify-center items-center bg-whity shrink-0">
                        <Icons icon={"google"} />
                      </span>
                      <span className="text-body-text leading-160 font-semibold text-sm sm:text-base">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <span
            className="hidden sm:flex items-center cursor-pointer rounded-full border border-green justify-center h-10 w-10 sm:h-15 sm:w-15 + shrink-0 group duration-300 ease-in hover:bg-green hover:border-transparent"
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
      </div>
      <div className="flex gap-6 sm:hidden mx-auto mt-10">
        <span
          className="flex items-center cursor-pointer rounded-full border border-green justify-center h-10 w-10 sm:h-15 sm:w-15 + shrink-0
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
        <span
          className="flex items-center cursor-pointer rounded-full border border-green justify-center h-10 w-10 sm:h-15 sm:w-15 + shrink-0 group duration-300 ease-in hover:bg-green hover:border-transparent"
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
    </div>
  );
};

export default RealTransformation;
