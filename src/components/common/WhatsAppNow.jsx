import React from "react";
import Icons from "./Icons";

const WhatsAppNow = ({ text }) => {
  return (
    <a
      href="https://wa.me/919999999999"
      className="px-7 py-3 flex gap-2.5 bg-green text-whity rounded-full border border-transparent font-semibold leading-160 w-fit duration-300 ease-in-out hover:bg-whity hover:text-green hover:border-green group"
    >
      <Icons icon={"whatsapp"} />
      {text}
    </a>
  );
};

export default WhatsAppNow;
