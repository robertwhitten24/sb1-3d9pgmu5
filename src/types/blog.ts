export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
}