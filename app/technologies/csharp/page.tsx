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

const TechnologiesCSharpPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technologies / C#"
        description="Our highly skilled C# specialists bring extensive experience from diverse projects. With deep knowledge of C#'s nuances and frameworks, they architect robust, efficient, and scalable software solutions. Committed to excellence, they deliver top-tier C# applications exceeding client expectations."
      />
     <TechnologyServices
  title="Our C# Services"
  paragraph="Discover our comprehensive suite of C# solutions designed to fulfill your business requirements. We specialize in C# application development, web development, consulting services, desktop application development, mobile app development, and integration services."
  list={[
    "C# application development",
    "C# web development",
    "C# consulting services",
    "C# desktop application development",
    "C# mobile app development",
    "C# integration services"
  ]}
/>
<TechnologyDetails
  title={['Languages', 'Frameworks', 'IDEs', 'Build Tools']}
  subtitle={[
    'C#',
    '.NET Framework, .NET Core',
    'IDEs (e.g., Visual Studio, Visual Studio Code)',
    'Build Tools (e.g., MSBuild, NuGet)'
  ]}
/>

    </>
  );
};

export default TechnologiesCSharpPage;
