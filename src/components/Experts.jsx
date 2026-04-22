import { Heading } from "./common/Heading";
import Paragraph from "./common/Paragraph";
import WhatsAppNow from "./common/WhatsAppNow";

const Experts = () => {
  return (
    <div className="bg-cream" id="blog">
      <div
        className="w-full pt-11.25 pb-13.75 flex flex-col items-center gap-8 bg-[url('/images/webp/cta.webp')] bg-cover
     bg-bottom bg-no-repeat mt-11 lg:mt-30 px-5 xl:px-0"
      >
        <div className="flex flex-col gap-4 text-center max-w-198.75">
          <Heading
            text={"Your Trusted Upholstery "}
            spanText={"Experts in Singapore"}
            spanClassName={"text-green"}
            className={"text-blacky"}
          />

          <Paragraph
            text={
              "For over 18 years, we’ve perfected the art of upholstery. From sofas and chairs to custom built panels and commercial projects, every piece is crafted with premium materials and backed by our 12 month workmanship warranty."
            }
            className={"max-w-182.25 w-full "}
          />
        </div>
        <WhatsAppNow text={"WhatsApp Us Now!"} />
      </div>
    </div>
  );
};

export default Experts;
