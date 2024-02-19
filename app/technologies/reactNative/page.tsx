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

const TechnologiesReactNativePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technologies / React Native"
        description=" Our React Native magicians leverage the framework's cross-platform capabilities to build seamless mobile applications. With a focus on native-like performance and user experience, they deliver immersive solutions that resonate with audiences across platforms."
      />
      <TechnologyServices
  title="Our React Native Services"
  paragraph="Discover our React Native expertise tailored to fulfill your business requirements. We specialize in React Native application development, consulting services, UI/UX design, testing services, maintenance & support, and migration services."
  list={[
    "React Native application development",
    "React Native consulting services",
    "React Native UI/UX design",
    "React Native testing services",
    "React Native maintenance & support",
    "React Native migration services"
  ]}
/>
<TechnologyDetails
  title={['Languages', 'Frameworks', 'Examples']}
  subtitle={[
    'JavaScript, JSX',
    'React Native',
    'Visual Studio Code, Xcode, Android Studio'
  ]}
/>

    </>
  );
};

export default TechnologiesReactNativePage;
