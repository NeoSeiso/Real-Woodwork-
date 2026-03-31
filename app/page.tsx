"use client";

import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
