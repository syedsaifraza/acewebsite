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

const TechnologiesPhpPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technologies / Php"
        description=" Our PHP artisans sculpt dynamic and feature-rich web applications with finesse. Their expertise in PHP development ensures the creation of powerful and customizable solutions that cater to the unique requirements of our clients."
      />
      <TechnologyServices
  title="Our PHP Services"
  paragraph="Uncover our PHP capabilities tailored to elevate your business. We offer services in PHP application development, web development, consulting services, CMS development, eCommerce solutions, and PHP framework development."
  list={[
    "PHP application development",
    "PHP web development",
    "PHP consulting services",
    "PHP CMS development",
    "PHP eCommerce solutions",
    "PHP framework development"
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

export default TechnologiesPhpPage;
