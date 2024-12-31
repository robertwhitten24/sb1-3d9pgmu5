import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceDetailsProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  pricing?: string;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features,
  pricing 
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Icon className="w-12 h-12 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      
      <p className="text-gray-600 text-lg">{description}</p>
      
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 mt-2 bg-indigo-600 rounded-full" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {pricing && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing</h3>
          <p className="text-gray-600">{pricing}</p>
        </div>
      )}
      
      <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
        Request Service
      </button>
    </div>
  );
};

export default ServiceDetails;