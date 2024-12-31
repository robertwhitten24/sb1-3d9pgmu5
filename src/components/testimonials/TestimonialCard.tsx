import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types/testimonial';

const TestimonialCard: React.FC<Testimonial> = ({ 
  author, 
  role, 
  company, 
  content, 
  rating, 
  image 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <blockquote className="text-gray-700 mb-6">"{content}"</blockquote>
      <div className="flex items-center gap-4">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">{role} at {company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;