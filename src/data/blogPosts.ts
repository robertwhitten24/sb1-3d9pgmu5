import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 'cybersecurity-best-practices-2024',
    title: 'Essential Cybersecurity Best Practices for 2024',
    excerpt: 'Stay protected with these updated cybersecurity measures that every business should implement.',
    content: 'Full article content here...',
    author: {
      name: 'David Mitchell',
      role: 'Security Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
    },
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070',
    date: '2024-01-15',
    readTime: 5,
    category: 'Security',
    tags: ['cybersecurity', 'business', 'technology']
  },
  {
    id: 'cloud-migration-guide',
    title: 'A Complete Guide to Cloud Migration',
    excerpt: 'Learn how to successfully migrate your business operations to the cloud with minimal disruption.',
    content: 'Full article content here...',
    author: {
      name: 'Sarah Chen',
      role: 'Cloud Architect',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
    },
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
    date: '2024-01-10',
    readTime: 8,
    category: 'Cloud',
    tags: ['cloud', 'migration', 'business']
  },
  {
    id: 'remote-work-it-solutions',
    title: 'IT Solutions for Remote Work Success',
    excerpt: 'Discover the essential IT tools and practices for maintaining productivity in remote work environments.',
    content: 'Full article content here...',
    author: {
      name: 'James Wilson',
      role: 'IT Consultant',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
    },
    coverImage: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&q=80&w=2070',
    date: '2024-01-05',
    readTime: 6,
    category: 'Remote Work',
    tags: ['remote work', 'productivity', 'tools']
  }
];