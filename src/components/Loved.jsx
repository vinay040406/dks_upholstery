"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Heading } from "./common/Heading";
import Paragraph from "./common/Paragraph";
import Icons from "./common/Icons";
import Image from "next/image";
import { LOVED_DATA } from "@/utils/helper";
import { useRef, useState } from "react";

const Loved = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef();
  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12.5 my-16 sm:my-24 lg:my-30">
      <div className="max-w-285 w-full mx-auto flex flex-col lg:flex-row justify-between gap-6 lg:gap-0 px-4 xl:px-0">
        <Heading
          text={"Loved by Singapore "}
          spanText={"Homes & Businesses"}
          className={"text-blacky max-w-full lg:max-w-138.25 w-full text-center lg:text-left"}
          spanClassName={"text-green"}
        />
        <Paragraph
          text={
            "Over 100 five star reviews from customers who transformed their sofas, chairs, and spaces with DKS Upholstery."
          }
          className={"max-w-full lg:max-w-106.75 w-full text-center lg:text-left"}
        />
      </div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="max-w-360 w-full flex gap-8 h-95.25 sm:h-100 relative pb-10"
        modules={[Autoplay, Pagination]}
        loop={true}
        slidesPerView={1.2}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 24 },
          1024: { slidesPerView: 2.8, spaceBetween: 32 },
        }}
        observer={true}
        observeParents={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={{ clickable: true }}
      >
        {LOVED_DATA.map((item, index) => (
          <SwiperSlide key={index} className="w-full">
            <div
              className={`flex flex-col p-6 sm:p-10 rounded-2xl border h-81.75 sm:h-88.25 justify-between ${activeIndex === index ? "bg-green/6 border-blacky" : "bg-white border-blacky/16"}`}
            >
              <div className="flex flex-col gap-4 sm:gap-6">
                <Icons icon={"quote"} />
                <p className="leading-160 text-sm sm:text-base">{item.title}</p>
                <div className="flex justify-between">
                  <div className="flex gap-1 flex-col">
                    <h4 className="text-lg sm:text-2xl font-semibold leading-130 text-blacky">
                      {item.name}
                    </h4>
                    <span className="leading-160 text-sm sm:text-base">
                      {item.profession}
                    </span>
                  </div>
                  <Image
                    src={item.image || "/images/webp/placeholder.webp"}
                    height={60}
                    width={60}
                    alt={item.name}
                    className="object-cover rounded-full object-center h-10 w-10 sm:h-15 sm:w-15"
                  />
                </div>
              </div>
              <div className="flex gap-2.5 items-center mt-4 sm:mt-0">
                <Icons icon={"google"} />
                {[1, 2, 3, 4, 5].map((star, i) => (
                  <Icons key={i} icon={"rating"} />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute max-w-full sm:max-w-327 w-full flex justify-between top-1/2 z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 sm:px-0 ">
          <span
            className="size-10 sm:size-12.5 rounded-full bg-whity border border-green hover:bg-green hover:border-transparent flex justify-center items-center cursor-pointer duration-300 ease-in group"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Icons
              icon={"arrow"}
              className={"rotate-90"}
              pathClass={"stroke-green group-hover:stroke-whity"}
            />
          </span>
          <span
            className="size-10 sm:size-12.5 rounded-full bg-whity border border-green hover:bg-green hover:border-transparent duration-300 ease-in flex justify-center items-center cursor-pointer group"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Icons
              icon={"arrow"}
              className={"rotate-270"}
              pathClass={"stroke-green group-hover:stroke-whity"}
            />
          </span>
        </div>
      </Swiper>
    </div>
  );
};

export default Loved;
