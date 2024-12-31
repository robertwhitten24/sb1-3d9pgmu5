import React from 'react';
import { TicketPriority } from './types';

interface PrioritySelectProps {
  value: TicketPriority;
  onChange: (value: TicketPriority) => void;
}

const PrioritySelect: React.FC<PrioritySelectProps> = ({ value, onChange }) => {
  const priorities: { value: TicketPriority; label: string; className: string }[] = [
    { value: 'low', label: 'Low', className: 'text-green-700 bg-green-50' },
    { value: 'medium', label: 'Medium', className: 'text-yellow-700 bg-yellow-50' },
    { value: 'high', label: 'High', className: 'text-red-700 bg-red-50' }
  ];

  return (
    <div className="flex gap-4">
      {priorities.map((priority) => (
        <button
          key={priority.value}
          type="button"
          onClick={() => onChange(priority.value)}
          className={`flex-1 px-4 py-2 rounded-lg border ${
            value === priority.value
              ? `${priority.className} border-${priority.value === 'medium' ? 'yellow' : priority.value}-200`
              : 'border-gray-300 hover:border-gray-400'
          } transition-colors`}
        >
          {priority.label}
        </button>
      ))}
    </div>
  );
};

export default PrioritySelect;