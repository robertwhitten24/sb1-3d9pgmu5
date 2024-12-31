export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  cover_image: string | null;
  published: boolean;
  published_at: string | null;
  created_at: string;
  post_categories: {
    category_id: {
      name: string;
      slug: string;
    };
  }[];
  post_tags: {
    tag_id: {
      name: string;
      slug: string;
    };
  }[];
}