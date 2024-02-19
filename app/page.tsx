import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Mission from "@/components/Mission";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Acetians Technologies",

  description: "Acetians Technologies is one of the leading tech giant based in India.",
  // other metadata
};

export default function Home() {
  return (
    <> 
      <ScrollUp />
      <Hero />
      <Mission/>
      <Features />
      
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials /> 
      <Blog />
      <Contact />
    </>
  );
}
