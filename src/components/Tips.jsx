import { TIPS_DATA } from "@/utils/helper";
import Button from "./common/Button";
import { Heading } from "./common/Heading";
import Paragraph from "./common/Paragraph";
import Image from "next/image";
import Icons from "./common/Icons";

const Tips = () => {
  return (
    <div className="w-full bg-cream">
      <div className="max-w-285 w-full mx-auto mt-20 lg:mt-30 flex flex-col gap-8 sm:gap-12.5 px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
          <Heading
            text={"Upholstery Tips, "}
            spanText={"Care & Inspiration"}
            className={"text-blacky max-w-full lg:max-w-112.75 w-full"}
            spanClassName={"text-green"}
          />
          <Paragraph
            text={
              "Refresh your sofa with the right fabrics, foam, and expert advice plus a breakdown of reupholstery costs in Singapore."
            }
            className={"max-w-full lg:max-w-106.75 w-full"}
          />
        </div>
        <div className="flex flex-col gap-5 sm:gap-7.5 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <Image
              src="/images/webp/tips1.webp"
              height={312}
              width={364}
              alt="tips1"
              className="h-78 rounded-2xl object-cover object-center w-full"
            />
            <div className="flex flex-col justify-between rounded-2xl shadow-[0px_4px_25px_0px_rgba(1,1,1,0.1)] p-5 min-h-78">
              <div className="flex flex-col gap-1.5">
                <h4 className="text-lg sm:text-xl leading-120 text-blacky font-semibold">
                  Best Upholstery Fabrics 2025
                </h4>
                <Paragraph
                  text={
                    "Explore the top trending and durable fabrics for sofas and chairs in 2025."
                  }
                  className={"pr-0 sm:pr-9"}
                />
              </div>
              <a
                href="/"
                className="flex gap-1 text-green font-semibold leading-160 mt-4 sm:mt-0"
              >
                Learn More
                <Icons icon={"learnMoreArrow"} />
              </a>
            </div>
            <Image
              src="/images/webp/tips2.webp"
              height={312}
              width={364}
              alt="tips2"
              className="h-78 rounded-2xl object-cover object-center w-full"
            />
          </div>
          <Button
            text={"Show More"}
            className={"py-3 px-7"}
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Tips;
