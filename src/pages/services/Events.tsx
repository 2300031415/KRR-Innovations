import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { servicesData } from "../../data/servicesData";

export const Events: React.FC = () => {
  // Index 2 represents Siri Events
  const eventsService = servicesData[2];
  
  return <ServicePageTemplate service={eventsService} />;
};

export default Events;
