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

const TechnologiesKotlinPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technologies / Kotlin"
        description="Our Kotlin maestros leverage the language's modern features to develop innovative and efficient solutions. Their expertise in Kotlin enables them to create dynamic and adaptable applications that elevate user experiences and achieve exceptional results."
      />
     <TechnologyServices
  title="Our Kotlin Services"
  paragraph="Explore our Kotlin expertise tailored to meet your business needs. Our team specializes in Kotlin application development, web development, consulting services, UI/UX design, testing services, and migration services."
  list={[
    "Kotlin application development",
    "Kotlin web development",
    "Kotlin consulting services",
    "Kotlin UI/UX design",
    "Kotlin testing services",
    "Kotlin migration services"
  ]}
/>
<TechnologyDetails
  title={['Languages', 'Frameworks', 'IDEs']}
  subtitle={[
    'Kotlin',
    'Kotlin SDK',
    'IntelliJ IDEA, Android Studio'
  ]}
/>

    </>
  );
};

export default TechnologiesKotlinPage;
