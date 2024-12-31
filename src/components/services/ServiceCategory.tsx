import React from 'react';
import ServiceCard from '../ServiceCard';
import { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  pricing: string;
}

interface ServiceCategoryProps {
  title: string;
  description: string;
  services: Service[];
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ title, description, services }) => {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;