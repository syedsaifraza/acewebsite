import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import JavaServices from "@/components/Technologies/JavaServices";
import JavaTechnologies from "@/components/Technologies/JavaTechnoloiges";
import TechnologyDetails from "@/components/Technologies/TechnologyDetails";
import TechnologyServices from "@/components/Technologies/TechnologyServices";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | OperationalSupport",
  description: "",
  // other metadata
};

const ServicesOperationalSupportPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services / Operational Support"
        description="Our Acetians Support Service experts are your most important partners in increasing your team productivity, keeping pace with technology advances and software releases, and obtaining break-fix support required to keep things running."
      />
    <TechnologyServices
    fullWidth={true}
  title="Partner With Acetians Product Experts"
  paragraph=""
  list={[
    "Priority access to Acetians Technical Assistance Center (TAC) engineers 24x7x365",
    "Guidance on configuration, interoperability and other best practices",
    "Access to all Acetians network software releases",
    "Flexible hardware and onsite support options",
    "Online access to the Acetians Support Portal",
    "Total coverage for all Acetians Offerings",
    "Acetians Customer Engineering support"
  ]}
/>

 
    </>
  );
};

export default ServicesOperationalSupportPage;
