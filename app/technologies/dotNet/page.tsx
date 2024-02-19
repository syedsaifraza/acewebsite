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

const TechnologiesDotNetPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technologies / .Net"
        description="Our .NET experts, rich in experience, wield a deep understanding of the ecosystem. They craft resilient software solutions, guided by a commitment to excellence, exceeding client objectives with bespoke applications."
      />
     <TechnologyServices
  title="Our .NET Services"
  paragraph="Uncover our broad spectrum of .NET capabilities tailored to elevate your business. We offer services in .NET application development, web development, consulting services, .NET Core development, .NET API development, and .NET migration services."
  list={[
    ".NET application development",
    ".NET web development",
    ".NET consulting services",
    ".NET Core development",
    ".NET API development",
    ".NET migration services"
  ]}
/>
<TechnologyDetails
  title={['Languages', 'Frameworks', 'Examples']}
  subtitle={[
    'C#',
    '.NET Framework, .NET Core',
    'Visual Studio, Visual Studio Code'
  ]}
/>

    </>
  );
};

export default TechnologiesDotNetPage;
