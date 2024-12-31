import React, { useEffect, useState } from 'react';
import BlogCard from '../components/blog/BlogCard';
import { getPosts } from '../lib/blog';
import { Post } from '../types/supabase';

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error('Error loading posts:', err);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">Loading posts...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest trends, tips, and insights in IT and technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard 
              key={post.id}
              id={post.slug}
              title={post.title}
              excerpt={post.excerpt || ''}
              content={post.content || ''}
              coverImage={post.cover_image || ''}
              date={post.published_at || post.created_at}
              category={post.post_categories[0]?.category_id.name || 'Uncategorized'}
              tags={post.post_tags.map(tag => tag.tag_id.name)}
              readTime={5}
              author={{
                name: 'Author Name',
                role: 'IT Specialist',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;