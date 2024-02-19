import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import JavaServices from "@/components/Technologies/JavaServices";
import JavaTechnologies from "@/components/Technologies/JavaTechnoloiges";
import TechnologyDetails from "@/components/Technologies/TechnologyDetails";
import TechnologyServices from "@/components/Technologies/TechnologyServices";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technologies | Java",
  description: "",
  // other metadata
};

const TechnologiesNodeJsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technologies / Node JS"
        description="Our Node.js virtuosos harness the power of JavaScript to build lightning-fast, scalable, and real-time applications. With a focus on efficiency and flexibility, they deliver dynamic solutions that drive business growth and innovation."
      />
    <TechnologyServices
  title="Our Node.js Services"
  paragraph="Discover our Node.js solutions designed to fulfill your business requirements. We specialize in Node.js application development, web development, consulting services, API development, integration services, and real-time applications."
  list={[
    "Node.js application development",
    "Node.js web development",
    "Node.js consulting services",
    "Node.js API development",
    "Node.js integration services",
    "Node.js real-time applications"
  ]}
/>
<TechnologyDetails
  title={['Languages', 'Frameworks', 'Examples']}
  subtitle={[
    'JavaScript, TypeScript',
    'Node.js',
    'Visual Studio Code, WebStorm'
  ]}
/>

    </>
  );
};

export default TechnologiesNodeJsPage;
