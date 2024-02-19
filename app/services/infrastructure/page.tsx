import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import JavaServices from "@/components/Technologies/JavaServices";
import JavaTechnologies from "@/components/Technologies/JavaTechnoloiges";
import TechnologyDetails from "@/components/Technologies/TechnologyDetails";
import TechnologyServices from "@/components/Technologies/TechnologyServices";
import brandsData from "@/components/Brands/brandsData";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Infrastructure",
  description: "",
  // other metadata
};

 

const ServicesInfrastructurePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services / Infrastructure Solution"
        description="An Architecture for seamless scalablity comes with solid infrastructure ."
      />
    <TechnologyServices
  title="Identify. Integrate. Support."
  paragraph="We design, implement, and manage comprehensive frameworks that support the operation of various systems and technologies for our clients. Our services encompass both physical and digital infrastructure, including networking, security, environmental considerations, disaster recovery, and scalability. We ensure that our solutions are tailored to meet the specific needs of each client, focusing on efficiency, reliability, security, and sustainability. Through our expertise and innovative approach, we empower businesses to operate seamlessly and adapt to evolving technological landscapes.."
  list={[
     
  ]}
/>
<section>
<div className="container">
         
<div className="w-auto h-auto  align-items-center p-5 mb-5" style={{border:'1px dotted green'}}>
        <h1 style={{fontSize:'25px',fontWeight:'bolder'}}>Anywhere in India</h1> 
        <p style={{fontSize:'20px'}}>50+ support locations and 25+ availability. Solve your IT Infrastructure problems, no matter where you are in the country.</p>
      </div>


      



       



      <div className="w-auto h-auto  align-items-center p-5 mb-5" style={{border:'1px dotted green'}}>
        <h1 style={{fontSize:'24px',fontWeight:'bolder'}}>360 degree</h1> 
        <p style={{fontSize:'20px'}}>Across computing and mobility devices, Networking, Data Centers, Security, Cloud, Email & productivity and Audio Visual solutions. One-stop shop for all your IT needs.</p>
      </div>



      <div className="w-auto h-auto  align-items-center p-5 mb-5" style={{border:'1px dotted green'}}>
        <h1 style={{fontSize:'24px',fontWeight:'bolder'}}>10 years of experience</h1> 
        <p style={{fontSize:'20px'}}>Across computing and mobility devices, Networking, Data Centers, Security, Cloud, Email & productivity and Audio Visual solutions. One-stop shop for all your IT needs.</p>
      </div>


      <div className="w-auto h-auto  align-items-center p-5 mb-5" style={{border:'1px dotted green'}}>
        <h1 style={{fontSize:'24px',fontWeight:'bolder'}}>Centre of Excellence</h1> 
        <p style={{fontSize:'20px'}}>Get the latest in Wireless, Enterprise Mobility, AVSI& Information Security Services.</p>
      </div>
      <div className="w-auto h-auto  align-items-center p-5" style={{border:'1px dotted green'}}>
        <h1 style={{fontSize:'24px',fontWeight:'bolder'}}>
Managed Services & Maintenance</h1> 
        <p style={{fontSize:'20px'}}>Managed services reimagined. Move to always up and running IT that keeps up with business.</p>
      </div>

</div>  
</section>


    </>
  );
};

export default ServicesInfrastructurePage;
