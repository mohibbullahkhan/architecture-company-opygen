export interface Project {
  id: string;
  name: string;
  location: string;
  category: string;
  image: string;
  description: string;
  client: string;
  year: number;
  area: string;
}

export interface Architect {
  id: string;
  name: string;
  location: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}
