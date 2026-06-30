import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { servicesData } from "../../data/servicesData";

export const Ipr: React.FC = () => {
  // Index 0 represents IPR
  const iprService = servicesData[0];
  
  return <ServicePageTemplate service={iprService} />;
};

export default Ipr;
