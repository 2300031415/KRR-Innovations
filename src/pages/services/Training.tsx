import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { servicesData } from "../../data/servicesData";

export const Training: React.FC = () => {
  // Index 3 represents Skill Development Training
  const trainingService = servicesData[3];
  
  return <ServicePageTemplate service={trainingService} />;
};

export default Training;
