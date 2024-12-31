import React from 'react';
import ServiceCategory from '../components/services/ServiceCategory';
import { businessServices } from '../data/businessServices';
import { consumerServices } from '../data/consumerServices';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional IT solutions tailored for both businesses and individuals
          </p>
        </div>
        
        <ServiceCategory
          title="Business Services"
          description="Enterprise-grade IT solutions to help your business grow and succeed"
          services={businessServices}
        />
        
        <ServiceCategory
          title="Consumer Services"
          description="Professional IT support and solutions for home users and individuals"
          services={consumerServices}
        />
      </div>
    </div>
  );
};

export default Services;