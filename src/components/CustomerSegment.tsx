import React from 'react';
import { Building2, Users } from 'lucide-react';

interface SegmentProps {
  type: 'business' | 'consumer';
  title: string;
  description: string;
  features: string[];
  benefits: string[];
}

const CustomerSegment: React.FC<SegmentProps> = ({ type, title, description, features, benefits }) => {
  const icon = type === 'business' ? 
    <Building2 className="w-12 h-12 text-indigo-600" /> : 
    <Users className="w-12 h-12 text-indigo-600" />;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center gap-4 mb-6">
        {icon}
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-8">{description}</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-4 text-indigo-600">Key Services</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4 text-indigo-600">Benefits</h4>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerSegment;