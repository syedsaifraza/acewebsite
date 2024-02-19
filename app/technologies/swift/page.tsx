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

const TechnologiesSwiftPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technologies / Swift"
        description="Our Swift maestros utilize the language's modern features and performance to develop elegant and efficient iOS applications. With a focus on speed and reliability, they deliver seamless solutions that elevate user experiences and achieve exceptional results."
      />
      <TechnologyServices
  title="Our Swift Services"
  paragraph="Experience our comprehensive Swift solutions designed to empower your business. Our offerings include Swift application development, iOS app development, consulting services, UI/UX design, testing services, and migration services."
  list={[
    "Swift application development",
    "iOS app development",
    "Swift consulting services",
    "Swift UI/UX design",
    "Swift testing services",
    "Swift migration services"
  ]}
/>
<TechnologyDetails
  title={['Languages', 'Frameworks', 'Examples']}
  subtitle={[
    'Swift',
    'SwiftUI, UIKit',
    'Xcode'
  ]}
/>

    </>
  );
};

export default TechnologiesSwiftPage;
