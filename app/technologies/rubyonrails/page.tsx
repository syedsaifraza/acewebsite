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

const TechnologiesRubyOnRailsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technologies / Ruby On Rails"
        description="Our Ruby on Rails artisans harness the framework's productivity to develop powerful and scalable web applications. With a focus on convention over configuration, they deliver efficient solutions that accelerate development and drive business growth."
      />
      <TechnologyServices
  title="Our Ruby on Rails Services"
  paragraph="Uncover our Ruby on Rails capabilities crafted to meet your business needs. We offer services in Ruby on Rails application development, web development, consulting services, eCommerce solutions, CMS development, and Ruby on Rails framework development."
  list={[
    "Ruby on Rails application development",
    "Ruby on Rails web development",
    "Ruby on Rails consulting services",
    "Ruby on Rails eCommerce solutions",
    "Ruby on Rails CMS development",
    "Ruby on Rails framework development"
  ]}
/>
<TechnologyDetails
  title={['Languages', 'Frameworks', 'Examples']}
  subtitle={[
    'Ruby',
    'Ruby on Rails',
    'RubyMine, Visual Studio Code'
  ]}
/>

    </>
  );
};

export default TechnologiesRubyOnRailsPage;
