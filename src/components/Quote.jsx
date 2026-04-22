"use client";
import React from "react";
import Button from "./common/Button";
import { QUOTE_DATA } from "@/utils/helper";
import Icons from "./common/Icons";

const Quote = () => {
  return (
    <form
      className="bg-whity py-6 sm:py-10 max-w-282.25 w-full rounded-4xl shadow-[0px_4px_25px_0px_rgba(1,1,1,0.1)]
    px-4 sm:px-8 md:px-12.5 flex flex-col gap-6 mx-4 xl:mx-0"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {QUOTE_DATA.map((item, index) => (
          <div key={index} className="flex flex-col gap-1.5">
            <div className="flex gap-1.5 items-center">
              <Icons icon={item.icon} />
              <span className="text-sm font-medium leading-160">
                {item.title}
              </span>
            </div>
            {item.title === "Upload Photos" ? (
              <label className="relative w-full cursor-pointer">
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer placeholder:text-body-text"
                />

                <div className="border border-blacky/12 rounded-3xl px-4 py-3 flex items-center gap-2">
                  <Icons icon={"drop"} className="shrink-0" />
                  <span className="text-xs text-body-text">
                    {item.placeholder}
                  </span>
                </div>
              </label>
            ) : (
              <input
                required
                type={item.type}
                name={item.title}
                placeholder={item.placeholder}
                className="border border-blacky/12 rounded-3xl text-xs px-4 py-4 w-full outline-green placeholder:text-body-text"
              />
            )}
          </div>
        ))}
      </div>

      <Button
        type={"submit"}
        text={"Get Free Quote"}
        className={"py-3 flex justify-center"}
        variant="primary"
      />
    </form>
  );
};

export default Quote;
