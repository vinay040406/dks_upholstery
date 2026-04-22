"use client";
import { FAQ_DATA } from "@/utils/helper";
import { Heading } from "./common/Heading";
import Icons from "./common/Icons";
import { useState } from "react";
import Paragraph from "./common/Paragraph";
import Button from "./common/Button";
import { AnimatePresence, motion } from "framer-motion";

const Faq = () => {
  const [isActive, setIsActive] = useState(0);
  const handleFaq = (index) => {
    setIsActive(() => (isActive === index ? null : index));
  };
  return (
    <div
      className="max-w-285 w-full mx-auto flex flex-col gap-8 sm:gap-12.5 items-center scroll-mt-30 px-4 xl:px-0"
      id="faq"
    >
      <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-0">
        <Heading
          text={"Frequently Asked "}
          spanText={"Questions"}
          className={
            "max-w-full lg:max-w-108.75 w-full text-center lg:text-left"
          }
          spanClassName={"text-green"}
        />

        <div className="flex flex-col max-w-full lg:max-w-166.25 w-full gap-4 sm:gap-5">
          {FAQ_DATA.map((item, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 flex flex-col gap-2 cursor-pointer border rounded-xl ${
                isActive === index
                  ? "border-blacky bg-green/6"
                  : "border-blacky/12"
              }`}
              onClick={() => handleFaq(index)}
            >
              <div className="flex justify-between items-center gap-4">
                <h4 className="text-blacky font-semibold leading-160 text-sm sm:text-base">
                  {item.title}
                </h4>

                <motion.div
                  animate={{ rotate: isActive === index ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icons icon={"arrow"} className="h-5 w-5 sm:h-7 sm:w-7" />
                </motion.div>
              </div>
              <AnimatePresence>
                {isActive === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <Paragraph
                      className="max-w-full lg:max-w-134.75 w-full"
                      text={item.description}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <Button
        text={"Find More Answer"}
        className={"text-sm px-7 py-2.75"}
        variant="primary"
      />
    </div>
  );
};

export default Faq;
