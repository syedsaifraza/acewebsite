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

const TechnologiesVueJsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technologies / Vue Js"
        description="Our Vue.js virtuosos leverage the framework's simplicity and flexibility to develop dynamic and interactive web applications. With a focus on component-based architecture and reactivity, they deliver engaging solutions that enhance user experiences and drive business success."
      />
      <TechnologyServices
  title="Our Vue.js Services"
  paragraph="Discover our Vue.js expertise tailored to meet your business requirements. We specialize in Vue.js application development, web development, consulting services, UI/UX design, testing services, and migration services."
  list={[
    "Vue.js application development",
    "Vue.js web development",
    "Vue.js consulting services",
    "Vue.js UI/UX design",
    "Vue.js testing services",
    "Vue.js migration services"
  ]}
/>
<TechnologyDetails
  title={['Languages', 'Libraries/Frameworks', 'Examples']}
  subtitle={[
    'JavaScript',
    'Vue.js',
    'Visual Studio Code, WebStorm'
  ]}
/>

    </>
  );
};

export default TechnologiesVueJsPage;
