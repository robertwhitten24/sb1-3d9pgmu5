/*
  # Add sample blog data

  1. Sample Data
    - Categories: Technology, Security, Cloud Computing
    - Tags: Microsoft, Cloud, Security, Best Practices
    - Blog posts with categories and tags
  
  2. Data Structure
    - Adds sample categories and tags first
    - Creates sample blog posts
    - Links posts to categories and tags via junction tables
*/

-- Insert Categories
INSERT INTO categories (name, slug) VALUES
  ('Technology', 'technology'),
  ('Security', 'security'),
  ('Cloud Computing', 'cloud-computing');

-- Insert Tags
INSERT INTO tags (name, slug) VALUES
  ('Microsoft', 'microsoft'),
  ('Cloud', 'cloud'),
  ('Security', 'security'),
  ('Best Practices', 'best-practices');

-- Insert Posts
INSERT INTO posts (title, slug, excerpt, content, cover_image, published, published_at) VALUES
(
  'Essential Cybersecurity Practices for 2024',
  'essential-cybersecurity-practices-2024',
  'Stay protected with these updated cybersecurity measures that every business should implement.',
  'Full article content about cybersecurity best practices...',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070',
  true,
  NOW()
),
(
  'Cloud Migration Guide',
  'cloud-migration-guide',
  'Learn how to successfully migrate your business operations to the cloud with minimal disruption.',
  'Comprehensive guide about cloud migration strategies...',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
  true,
  NOW()
);

-- Link Posts to Categories
INSERT INTO post_categories (post_id, category_id)
SELECT p.id, c.id
FROM posts p, categories c
WHERE p.slug = 'essential-cybersecurity-practices-2024' AND c.slug = 'security';

INSERT INTO post_categories (post_id, category_id)
SELECT p.id, c.id
FROM posts p, categories c
WHERE p.slug = 'cloud-migration-guide' AND c.slug = 'cloud-computing';

-- Link Posts to Tags
INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id
FROM posts p, tags t
WHERE p.slug = 'essential-cybersecurity-practices-2024' AND t.slug IN ('security', 'best-practices');

INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id
FROM posts p, tags t
WHERE p.slug = 'cloud-migration-guide' AND t.slug IN ('cloud', 'best-practices');