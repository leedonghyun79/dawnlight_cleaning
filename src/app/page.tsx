import Hero from "@/components/sections/Hero";
import StatsBand from "@/components/sections/StatsBand";
import BusinessSummary from "@/components/sections/BusinessSummary";
import Guarantee from "@/components/sections/Guarantee";
import Service from "@/components/sections/Service";
import Process from "@/components/sections/Process";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Review from "@/components/sections/Review";
import FaqPreview from "@/components/sections/FaqPreview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <BusinessSummary />
      <Guarantee />
      <Service />
      <Process />
      <PortfolioPreview />
      <Review />
      <FaqPreview />
      <CTA />
    </>
  );
}
