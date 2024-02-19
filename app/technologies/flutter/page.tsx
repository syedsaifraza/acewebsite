import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import JavaServices from "@/components/Technologies/JavaServices";
import JavaTechnologies from "@/components/Technologies/JavaTechnoloiges";
import TechnologyDetails from "@/components/Technologies/TechnologyDetails";
import TechnologyServices from "@/components/Technologies/TechnologyServices";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technologies | Flutter-Dart",
  description: "",
  // other metadata
};

const TechnologiesFlutterPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technologies / Flutter-Dart"
        description=" Our Flutter maestros blend creativity with expertise, crafting visually stunning and performant mobile applications. With a focus on innovation and user experience, they deliver captivating solutions that resonate with audiences."
      />
      <TechnologyServices
  title="Our Flutter Services"
  paragraph="Unlock the potential of Flutter with our tailored solutions. Our expertise spans across Flutter app development, consulting services, UI/UX design, testing services, maintenance & support, and migration services."
  list={[
    "Flutter app development",
    "Flutter consulting services",
    "Flutter UI/UX design",
    "Flutter testing services",
    "Flutter maintenance & support",
    "Flutter migration services"
  ]}
/>

<TechnologyDetails
  title={['Languages', 'Frameworks', 'Examples']}
  subtitle={[
    'Dart',
    'Flutter SDK',
    'Android Studio, Visual Studio Code'
  ]}
/>

    </>
  );
};

export default TechnologiesFlutterPage;
