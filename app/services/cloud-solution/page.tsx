import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import brandsData from "@/components/Brands/brandsData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
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


const ServicesCloudSolutionPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services / Cloud Solution"
        description="With global partners around the world we assure you best cloud soultion services at Acetians"
      />
   <TechnologyServices
  title="Just Pay for What you use"
  paragraph="The part in using a cloud solution is you only pay for what you use.It would never go like that an unnessary server bills will hamper your bussines growth . Besides these there are multiple other benefits of using cloud solution ."
  list={[
    "Reduce Cost",
    "Fast and Flexible",
    "Expand Easily",
    "More IT, Less Time",
    "Performance every time, always", 
  ]}
/>
<section>
<div className="container">
<SectionTitle
                title="Partnered with Global Giants of the Cloud Industry."
                paragraph="Acetians is Global as well as authorised partnership  of global service providers hence committed to zero error delivery ."
                mb="44px"
              center={true}
              /> 
      <div className="md:flex justify-center align-items-center">
      {brandsData.map((brand,key) => (
      <div key={key} className="w-auto h-auto  flex justify-center  align-items-center p-3">
        <img src={brand.image} style={{alignItems:'center'}} 
        />
      </div>
      ))}
  
  
</div>        


</div>  
</section>

    </>
  );
};

export default ServicesCloudSolutionPage;
