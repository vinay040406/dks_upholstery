import { MARQUE_DATA } from "@/utils/helper";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <Marquee className="flex" pauseOnHover speed="40">
      {MARQUE_DATA.map((item, index) => (
        <Image
          src={item}
          key={index}
          height={80}
          width={180}
          alt={item}
          className={`${index === -1 ? "mr-0" : "mr-12.5"}`}
        />
      ))}
    </Marquee>
  );
};

export default Marque;
