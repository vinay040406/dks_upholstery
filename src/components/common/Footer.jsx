"use client";
import Image from "next/image";
import Paragraph from "./Paragraph";
import Icons from "./Icons";
import {
  FOOTER_IMAGES,
  FOOTER_PAGE_DETAILS,
  FOOTER_SOCIAL_LINKS,
} from "@/utils/helper";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-cream pt-10 sm:pt-24 lg:pt-32.5">
      <div className="flex flex-col gap-10">
        <div className="max-w-304.25 relative w-full mx-auto flex flex-col lg:flex-row justify-between px-5 xl:px-0 gap-10">
          <div className="flex flex-col md:flex-row xl:pr-0 md:pr-5 lg:flex-col gap-5 lg:border-r border-r-blacky/12 max-w-full lg:max-w-144.25 w-full">
            <div className="flex flex-col gap-6  sm:gap-8 border-b border-b-blacky/12 pb-8 max-w-full lg:max-w-133.75">
              <Link href={"/"}>
                <Image
                  src={"/images/webp/logo.webp"}
                  height={41}
                  width={193}
                  alt="logo"
                  className="object-cover object-center"
                />
              </Link>
              <Paragraph
                text={
                  "At DKS, we specialize in expert upholstery, custom furniture, and repairs combining craftsmanship with care to bring new life to your furniture."
                }
                className={"max-w-74.5 lg:max-w-113 text-sm sm:text-base"}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-5 md:gap-5 lg:gap-15">
              <div className="flex flex-col gap-6.75 max-w-full sm:max-w-58.25">
                <div className="flex gap-2 min-w-58">
                  <Icons icon={"location"} />
                  <Paragraph
                    text={`Defu Industrial Estate Address:  37 Defu Lane 10, #01/41, Singapore 539214`}
                    className={"max-w-48 sm:max-w-51 text-sm sm:text-base"}
                  />
                </div>
                <div className="md:relative absolute -bottom-5 sm:-bottom-8 left-1/2 -translate-x-1/2 flex justify-between items-center w-full px-5 md:px-0 ">
                  <div className="flex gap-2 items-center">
                    <Icons icon={"follow"} />
                    <h4 className="leading-160 font-medium">Follow Us</h4>
                  </div>
                  <ul className="flex gap-3">
                    {FOOTER_SOCIAL_LINKS.map((item, index) => (
                      <li key={index}>
                        <a href={`https://www.${item}.com`} target="_blank">
                          <Icons
                            icon={item}
                            className="hover:scale-110 duration-300 ease-in-out"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-2.25 max-w-full md:max-w-60.75">
                {FOOTER_PAGE_DETAILS.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.svg === "" && "pl-7"} flex gap-2 items-center hover:text-green group text-sm sm:text-base text-body-text`}
                  >
                    <Icons
                      icon={item.svg}
                      pathClass={"group-hover:fill-green"}
                    />
                    <a
                      href={
                        item.svg === "footerWhatsapp"
                          ? `https://wa.me/${item.text}`
                          : item.svg === "mobile"
                            ? `tel:${item.text}`
                            : item.svg === "email"
                              ? `mailto:${item.text}.com`
                              : `mailto:${item.text}.com`
                      }
                    >
                      {item.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3.5 sm:gap-8.75 max-w-full lg:max-w-140.5 w-full">
            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap pb-4 sm:pb-8 border-b border-b-blacky/12 gap-2 sm:gap-3.25 justify-center sm:justify-start">
                {["Home", "Services", "Gallery"].map((item, index) => (
                  <a
                    href={`#${item.replaceAll(" ", "-").toLowerCase()}`}
                    key={index}
                    className="border-r cursor-pointer li hover:text-green border-r-blacky/12 pr-2 sm:pr-3.25 text-body-text leading-160 text-sm sm:text-base"
                  >
                    {item}
                  </a>
                ))}
                {["About Us", "Blog", "FAQs", "Contact"].map((item, index) => (
                  <a
                    href={`#${item === "FAQs" ? item.slice(0, -1).toLowerCase() : item.replaceAll(" ", "-").toLowerCase()}`}
                    key={index}
                    className="border-l li hover:text-green border-l-blacky/12 pl-2 sm:pl-3.25 text-body-text leading-160 text-sm sm:text-base"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="hidden sm:grid grid-cols-4 sm:grid-cols-6 gap-3.75">
                {FOOTER_IMAGES.map((item, index) => (
                  <Image
                    key={index}
                    src={item}
                    height={70}
                    width={84}
                    alt={String(index)}
                    className="rounded-[10px] h-17.5 w-full object-cover duration-300 ease-in-out hover:scale-110 cursor-grab"
                  />
                ))}
              </div>
            </div>
            <div className="sm:border-t sm:border-t-blacky/12 pt-2.5 sm:pt-5 md:pb-0 sm:pb-3 pb-1">
              <div className="hidden sm:flex flex-col gap-3 w-full ">
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {["Reupholstery", "Covers & Cushions", "Foam & Filling"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className={`text-sm sm:text-base ${item !== "Foam & Filling" && "border-r border-r-blacky/12 pr-2 sm:pr-2.5"}`}
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {["Beds & Headboards", "Built Ins", "Custom Furniture"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className={`text-sm sm:text-base ${item !== "Custom Furniture" && "border-r border-r-blacky/12 pr-2 sm:pr-2.5"}`}
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {[
                    "Repairs & On Site",
                    "Outdoor & Commercial",
                    "Cleaning",
                    "Revarnishing",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`whitespace-nowrap text-sm sm:text-base ${item !== "Revarnishing" && "border-r border-r-blacky/12 pr-2 sm:pr-2.5"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="text-sm sm:text-base">Terms of Service</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-t-blacky/12 py-4.25 max-w-337 w-full mx-auto px-4 xl:px-0">
          <p className="text-blacky leading-160 flex justify-center text-sm sm:text-base text-center">
            Copyright © {new Date().getFullYear()} DKS Upholstery Pte Ltd | DKS
            International Supplier & Services. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
