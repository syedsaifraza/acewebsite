import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import JavaServices from "@/components/Technologies/JavaServices";
import JavaTechnologies from "@/components/Technologies/JavaTechnoloiges";
import TechnologyDetails from "@/components/Technologies/TechnologyDetails";
import TechnologyServices from "@/components/Technologies/TechnologyServices";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Cloud Solution",
  description: "",
  // other metadata
};

const ServicesConsultingServicesPage = () => {
  return (
    <>
      <Breadcrumb
    pageName="Services / Consulting"
    description="With our expert consultants and strategic insights, we offer top-notch consulting services at Acetians"
/>

    <TechnologyServices
  title="Leveraging Contextual Knowledge of Our Clients to Create Exponential Value"
  paragraph="The business landscape has never been more complex with continuous disruption through new technologies, innovations, and game-changing business models. Customer demands are on the rise and always evolving. An agile, highly intuitive, and customized customer experience is no longer a differentiator but a requirement. Traditional strategies and siloed business functions can no longer sufficiently support the evolved needs of a global enterprise."
  list={[
     
  ]}
/>

 

    </>
  );
};

export default ServicesConsultingServicesPage;
