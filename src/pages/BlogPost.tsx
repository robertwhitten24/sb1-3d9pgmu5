import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { getPostBySlug } from '../lib/blog';
import { Post } from '../types/supabase';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPost() {
      if (!id) return;
      
      try {
        const data = await getPostBySlug(id);
        setPost(data);
      } catch (err) {
        setError('Failed to load blog post');
        console.error('Error loading post:', err);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">Loading post...</div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto">
          {post.cover_image && (
            <div className="mb-8">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </div>
          )}

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full">
                {post.post_categories[0]?.category_id.name || 'Uncategorized'}
              </span>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                {new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                5 min read
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center gap-4 mb-8 pb-8 border-b">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Author"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-semibold">Author Name</div>
                <div className="text-gray-600">IT Specialist</div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content}
            </div>

            <div className="mt-8 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                {post.post_tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    #{tag.tag_id.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;