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

const TechnologiesAngularPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technologies / Angular"
        description="Explore our comprehensive range of Angular services tailored to meet your business needs."
      />
    <TechnologyServices
  title="Our Angular Services"
  paragraph="Explore our extensive range of Angular expertise tailored to meet your business needs. Our team excels in Angular application development, web development, consulting services, UI/UX design, testing services, and migration services."
  list={[
    "Angular application development",
    "Angular web development",
    "Angular consulting services",
    "Angular UI/UX design",
    "Angular testing services",
    "Angular migration services"
  ]}
/>

<TechnologyDetails
  title={['Languages', 'Frameworks', 'IDEs', 'Build Tools']}
  subtitle={[
    'JavaScript',
    'AngularJS',
    'Visual Studio Code, WebStorm',
    ' Grunt, Gulp'
  ]}
/>

    </>
  );
};

export default TechnologiesAngularPage;
