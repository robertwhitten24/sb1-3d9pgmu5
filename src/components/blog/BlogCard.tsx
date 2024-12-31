import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';

const BlogCard: React.FC<BlogPost> = ({
  id,
  title,
  excerpt,
  author,
  coverImage,
  date,
  readTime,
  category
}) => {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden group">
      <Link to={`/blog/${id}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
              {category}
            </span>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              {new Date(date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              {readTime} min read
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          
          <div className="flex items-center gap-3">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-medium text-gray-900">{author.name}</div>
              <div className="text-sm text-gray-600">{author.role}</div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;