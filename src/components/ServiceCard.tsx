import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import Modal from './Modal';
import ServiceDetails from './ServiceDetails';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  pricing?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, features, pricing }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="mb-4">
          <Icon className="w-8 h-8 text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ServiceDetails 
          icon={Icon} 
          title={title} 
          description={description} 
          features={features} 
          pricing={pricing}
        />
      </Modal>
    </>
  );
};

export default ServiceCard;