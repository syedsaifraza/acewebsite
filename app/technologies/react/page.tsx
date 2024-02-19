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

const TechnologiesReactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technologies / React"
        description="Our React aficionados blend creativity with expertise to craft immersive and responsive web applications. With a focus on user-centric design and performance optimization, they deliver captivating solutions that engage and delight users."
      />
      <TechnologyServices
  title="Our React Services"
  paragraph="Experience our extensive React solutions designed to empower your business. Our offerings include React application development, web development, consulting services, UI/UX design, testing services, and migration services."
  list={[
    "React application development",
    "React web development",
    "React consulting services",
    "React UI/UX design",
    "React testing services",
    "React migration services"
  ]}
/>
<TechnologyDetails
  title={['Languages', 'Libraries/Frameworks', 'Examples']}
  subtitle={[
    'JavaScript, JSX',
    'React',
    'Visual Studio Code, WebStorm'
  ]}
/>

    </>
  );
};

export default TechnologiesReactPage;
