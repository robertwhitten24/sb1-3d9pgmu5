import React from 'react';
import ServiceCard from './ServiceCard';
import { serviceCategories } from '../data/serviceCategories';

const ServiceGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {serviceCategories.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServiceGrid;