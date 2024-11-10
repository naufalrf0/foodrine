"use client";

import HeroSection from "@/components/sections/hero-section";
import JoinTheMovement from "@/components/sections/join-the-movement";
import OurServices from "@/components/sections/our-services";
import WhyFoodrine from "@/components/sections/why-foodrine";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OurServices />
      <WhyFoodrine />
      <JoinTheMovement />
    </>
  );
};
export default HomePage;
