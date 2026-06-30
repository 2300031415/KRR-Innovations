import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { servicesData } from "../../data/servicesData";

export const Technology: React.FC = () => {
  // Index 1 represents Technology Consultancy & Development
  const techService = servicesData[1];
  
  return <ServicePageTemplate service={techService} />;
};

export default Technology;
