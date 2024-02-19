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

const TechnologiesJavaPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technologies / Java"
        description="Our Java virtuosos wield the language's versatility to craft robust, scalable solutions. With meticulous attention to detail, they engineer high-performance applications that drive business success and exceed client expectations."
      />
     <TechnologyServices
  title="Our Java Services"
  paragraph="Experience our extensive Java solutions designed to empower your business. Our offerings include Java application development, web development, mobile app development, consulting services, Spring Boot development, and Hibernate development."
  list={[
    "Java application development",
    "Java web development",
    "Java mobile app development",
    "Java consulting services",
    "Java Spring Boot development",
    "Java Hibernate development"
  ]}
/>

<TechnologyDetails
  title={['Languages', 'Frameworks', 'IDEs']}
  subtitle={[
    'Java',
    'Spring Boot, Hibernate',
    'IntelliJ IDEA, Eclipse'
  ]}
/>

    </>
  );
};

export default TechnologiesJavaPage;
