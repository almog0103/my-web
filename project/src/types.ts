export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}