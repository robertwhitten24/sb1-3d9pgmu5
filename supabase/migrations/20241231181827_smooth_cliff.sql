/*
  # Blog System Tables

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `content` (text)
      - `excerpt` (text)
      - `cover_image` (text)
      - `published` (boolean)
      - `published_at` (timestamp)
      - `created_at` (timestamp)
    - `categories`
      - `id` (uuid, primary key) 
      - `name` (text)
      - `slug` (text)
    - `tags`
      - `id` (uuid, primary key)
      - `name` (text)
      - `slug` (text)
    - Junction tables for many-to-many relationships

  2. Security
    - Enable RLS on all tables
    - Public read access for published posts
    - Authenticated write access
*/

-- Posts table
CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text,
  excerpt text,
  cover_image text,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Tags table
CREATE TABLE IF NOT EXISTS tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Junction tables
CREATE TABLE IF NOT EXISTS post_categories (
  post_id uuid REFERENCES posts ON DELETE CASCADE,
  category_id uuid REFERENCES categories ON DELETE CASCADE,
  PRIMARY KEY (post_id, category_id)
);

CREATE TABLE IF NOT EXISTS post_tags (
  post_id uuid REFERENCES posts ON DELETE CASCADE,
  tag_id uuid REFERENCES tags ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- Enable RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_tags ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public can view published posts"
  ON posts FOR SELECT
  USING (published = true);

CREATE POLICY "Public can view categories"
  ON categories FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Public can view tags"
  ON tags FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Public can view post categories"
  ON post_categories FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Public can view post tags"
  ON post_tags FOR SELECT
  TO PUBLIC
  USING (true);