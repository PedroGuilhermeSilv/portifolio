"use client";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FixedMenu } from "@/components/FixedMenu";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work/Work";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const loadLocomotiveScroll = () => {
      import("locomotive-scroll").then((LocomotiveScroll) => {
        new LocomotiveScroll.default();
      });
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Journey />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}