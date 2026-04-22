import AboutUs from "@/components/AboutUs";
import Experts from "@/components/Experts";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Loved from "@/components/Loved";
import PickService from "@/components/PickService";
import RealTransformation from "@/components/RealTransformation";
import SeeDifference from "@/components/SeeDifference";
import Tips from "@/components/Tips";
import Trusted from "@/components/Trusted";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Trusted />
      <Loved />
      <SeeDifference />
      <PickService />
      <RealTransformation />
      <AboutUs />
      <div
        aria-label="section-bg-image"
        className="flex flex-col bg-[url('/Images/webp/section.webp')] bg-cover bg-center bg-no-repeat mt-20 sm:mt-30 py-12.5 lg:py-30 gap-20 lg:gap-30"
      >
        <HowWorks />
        <Faq />
      </div>
      <Tips />
      <Experts />
    </div>
  );
}
