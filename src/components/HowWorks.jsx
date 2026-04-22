import { HOW_WORKS_DATA } from "@/utils/helper";
import { Heading } from "./common/Heading";
import Paragraph from "./common/Paragraph";
import Image from "next/image";
import Button from "./common/Button";
import Icons from "./common/Icons";

const HowWorks = () => {
  return (
    <div className="flex flex-col max-w-233.5 w-full mx-auto items-center px-5 xl:px-0">
      <div className="flex flex-col gap-8 sm:gap-12.5 w-full">
        <div className="flex flex-col gap-3.75 max-w-full lg:max-w-209.25 text-center mx-auto">
          <Heading
            text={"How Our Upholstery "}
            spanText={"Service Works"}
            spanClassName={"text-green"}
          />
          <Paragraph
            text={
              "Getting your sofa, chair, or cushions reupholstered in Singapore is simple. Here's how our 3 step process makes it easy from start to finish."
            }
            className={"max-w-full lg:max-w-182.5 w-full"}
          />
        </div>
        <div className="flex flex-col gap-5 sm:gap-7.5 relative w-full">
          <Image
            src={"/images/webp/dashed-border.webp"}
            height={330}
            width={103}
            alt="dashed-border"
            className="absolute -left-25 top-33 hidden xl:block"
          />
          <Image
            src={"/images/webp/dashed-border.webp"}
            height={330}
            width={103}
            alt="dashed-border"
            className="absolute rotate-y-180 bottom-30 -right-26 hidden xl:block"
          />
          {HOW_WORKS_DATA.map((item, index) => (
            <div
              key={index}
              className="border border-green/24 rounded-2xl flex flex-col sm:flex-row gap-1.5 sm:gap-11 items-center overflow-hidden cursor-grab group hover:bg-green/8 duration-300 ease-in-out w-full hover:border-transparent z-10"
            >
              <Image
                src={item.image}
                height={268}
                width={257}
                alt={item.title}
                className="h-48 w-full sm:h-67 sm:w-64.25 object-cover shrink-0"
              />
              <div className="flex flex-row sm:flex-col gap-2.5 max-w-full lg:max-w-150 w-full p-3.5 sm:p-0 sm:pr-6">
                <span className="h-10 w-10 rounded-full bg-whity border border-green text-green ease-in duration-200 group-hover:bg-green group-hover:border-transparent group-hover:text-whity text-2xl font-medium leading-120 flex justify-center items-center shrink-0">
                  {item.id}
                </span>
                <div className="flex flex-col gap-4 sm:gap-3">
                  <h4 className="text-custom-xl sm:text-custom-3xl leading-130 font-semibold text-blacky">
                    {item.title}
                  </h4>
                  <Paragraph
                    text={item.description}
                    className={"text-sm sm:text-base"}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        text={"Step 1 : Send Photo"}
        icon={
          <Icons
            icon={"sendPhoto"}
            pathClass={"group-hover:fill-green group-hover:stroke-green"}
          />
        }
        className={"px-6 py-3 mt-7.5 group"}
        variant="primary"
      />
    </div>
  );
};

export default HowWorks;
