import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import JavaServices from "@/components/Technologies/JavaServices";
import JavaTechnologies from "@/components/Technologies/JavaTechnoloiges";
import TechnologyDetails from "@/components/Technologies/TechnologyDetails";
import TechnologyServices from "@/components/Technologies/TechnologyServices";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | DigitalExperience",
  description: "",
  // other metadata
};

const ServicesDigitalExperiencePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services / Digital Experience"
        description="We specialize in crafting digital experience solutions aimed at enhancing user engagement and satisfaction across various digital platforms. Our approach is centered on user-centric design, ensuring that interfaces are intuitive and visually appealing. "
      />
    <TechnologyServices
  title="Get the Best Digital Experience"
  paragraph="We prioritize personalization, leveraging data analytics to tailor content and interactions to individual preferences. Integration across multiple channels is seamless, guaranteeing consistency regardless of the user's chosen platform. Performance optimization is a key focus, ensuring fast loading times and responsiveness. Accessibility is paramount, with adherence to standards ensuring inclusivity for all users. Robust security measures protect user data, fostering trust. Continuous improvement is ingrained in our process, driven by user feedback and analytics. Integration with backend systems ensures a seamless end-to-end experience. Through our digital experience solutions, we empower businesses to deliver exceptional experiences that drive engagement, satisfaction, and loyalty."
  list={[
    
  ]}
/>

<section>
<div className="container">
    <div className="row d-flex">
    <div className="col-md-6 h-auto  align-items-center p-5 mb-5" style={{border:'1px dotted green'}}>
        <h1 style={{fontSize:'25px',fontWeight:'bolder'}}>
Mobile Experiences</h1> 
        <p style={{fontSize:'20px'}}>Develop mobile apps with for native iOS, android and windows. Sync content across applications and portals.</p>
      </div>
     <div className="col-md-6 h-auto  align-items-center p-5 mb-5" style={{border:'1px dotted green'}}>
        <h1 style={{fontSize:'24px',fontWeight:'bolder'}}>Intranet</h1> 
        <p style={{fontSize:'20px'}}>Integrate with CRM, ERP, financials and marketing systems. Designed for Sharing with logs, forums, wikis and knowledge base.</p>
      </div>



      <div className="col-md-6 h-auto  align-items-center p-5 mb-5" style={{border:'1px dotted green'}}>
        <h1 style={{fontSize:'24px',fontWeight:'bolder'}}>Portal </h1> 
        <p style={{fontSize:'20px'}}>Portals for customers, partners, suppliers, agents and franchises. Create a one-stop shop under one login for the applications and information customers need.</p>
      </div>


      <div className="col-md-6 h-auto  align-items-center p-5 mb-5" style={{border:'1px dotted green'}}>
        <h1 style={{fontSize:'24px',fontWeight:'bolder'}}>Websites</h1> 
        <p style={{fontSize:'20px'}}>Build corporate Websites, customer self-service sites and customer loyalty sites. Deliver content in real time based on location, device and user interactions. Support regional and multilingual content.</p>
      </div>
     
      </div>     
 

</div>  
</section>

 

    </>
  );
};

export default ServicesDigitalExperiencePage;
