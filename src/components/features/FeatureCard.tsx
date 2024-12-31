import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-indigo-600/0 group-hover:from-indigo-600/10 transition-colors" />
      <div className="relative">
        <div className="inline-flex p-3 rounded-lg bg-indigo-600/10 mb-4">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;