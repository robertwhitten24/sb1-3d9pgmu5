import { supabase } from './supabase';

export async function getPosts() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select(`
      *,
      post_categories (
        category_id (
          name,
          slug
        )
      ),
      post_tags (
        tag_id (
          name,
          slug
        )
      )
    `)
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (error) throw error;
  return posts;
}

export async function getPostBySlug(slug: string) {
  const { data: post, error } = await supabase
    .from('posts')
    .select(`
      *,
      post_categories (
        category_id (
          name,
          slug
        )
      ),
      post_tags (
        tag_id (
          name,
          slug
        )
      )
    `)
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) throw error;
  return post;
}