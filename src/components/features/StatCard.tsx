import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md">
      <div className="text-3xl font-bold text-indigo-600 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default StatCard;