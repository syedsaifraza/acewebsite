import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import JavaServices from "@/components/Technologies/JavaServices";
import JavaTechnologies from "@/components/Technologies/JavaTechnoloiges";
import TechnologyDetails from "@/components/Technologies/TechnologyDetails";
import TechnologyServices from "@/components/Technologies/TechnologyServices";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | HardwareSolution",
  description: "",
  // other metadata
};

const ServicesHardwareSolutionPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services / Hardware Solution"
        description="Customers like services for their timely execution and effectiveness. Besides these, we provide services to the customers as per their needs as well as at affordable rates certainly."
      />
    <TechnologyServices
  title="Service is the lifeline of Acetians"
  paragraph="Explore our extensive range of Angular expertise tailored to meet your business needs. Our team excels in Angular application development, web development, consulting services, UI/UX design, testing services, and migration services."
  list={[
    "Desktop – Dell, HP, Lenovo",
    "Workstation – Dell, HP",
    "Laptop – Dell, HP, Lenovo",
    "Thin Clients – Dell Wyse, Vxl, RDP, HP"
  ]}
/>

 


    </>
  );
};

export default ServicesHardwareSolutionPage;
