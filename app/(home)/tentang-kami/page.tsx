import AboutHero from "@/components/sections/about-hero";
import FaqSection from "@/components/sections/faq-section";
import ProgramSection from "@/components/sections/program-section";
import SejarahSection from "@/components/sections/sejarah-section";
import VisionMissionSection from "@/components/sections/visi-misi";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <SejarahSection />
      <VisionMissionSection />
      <ProgramSection />
      <FaqSection />
    </>
  );
};

export default AboutPage;
