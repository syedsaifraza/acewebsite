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

const TechnologiesSpringBootPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technologies / Spring Boot"
        description=" Our Spring Boot experts harness the framework's simplicity and productivity to build robust and scalable applications. With a focus on rapid development and ease of deployment, they deliver high-performance solutions that meet the demands of modern businesses."
      />
    <TechnologyServices
  title="Our Spring Boot Services"
  paragraph="Unlock the potential of Spring Boot with our tailored solutions. Our expertise spans across Spring Boot application development, web development, consulting services, microservices architecture, testing services, and migration services."
  list={[
    "Spring Boot application development",
    "Spring Boot web development",
    "Spring Boot consulting services",
    "Spring Boot microservices architecture",
    "Spring Boot testing services",
    "Spring Boot migration services"
  ]}
/>
<TechnologyDetails
  title={['Languages', 'Frameworks', 'Examples']}
  subtitle={[
    'Java',
    'Spring Boot',
    'IntelliJ IDEA, Eclipse'
  ]}
/>

    </>
  );
};

export default TechnologiesSpringBootPage;
