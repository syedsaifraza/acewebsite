import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import PythonServices from "@/components/Technologies/PythonServices";
import PythonTechnologies from "@/components/Technologies/PythonTechnologies";
import TechnologyDetails from "@/components/Technologies/TechnologyDetails";
import TechnologyServices from "@/components/Technologies/TechnologyServices";
//import PythonTechnologies from "@/components/Technologies/PythonTechnoloiges";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technologies | Python",
  description: "",
  // other metadata
};

const TechnologiesPythonPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technologies / Python"
        description=" Our Python wizards utilize the language's simplicity and versatility to develop elegant and efficient solutions. With a focus on readability and maintainability, they craft robust applications that streamline processes and drive innovation."
      />
      <TechnologyServices
  title="Our Python Services"
  paragraph="Unlock the potential of Python with our tailored solutions. Our expertise spans across Python application development, web development, consulting services, data science solutions, machine learning services, and automation solutions."
  list={[
    "Python application development",
    "Python web development",
    "Python consulting services",
    "Python data science solutions",
    "Python machine learning services",
    "Python automation solutions"
  ]}
/>
<TechnologyDetails
  title={['Languages', 'Frameworks', 'Examples']}
  subtitle={[
    'Python',
    'Django, Flask',
    'PyCharm, Visual Studio Code'
  ]}
/>

    </>
  );
};

export default TechnologiesPythonPage;
