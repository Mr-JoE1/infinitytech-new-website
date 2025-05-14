export interface Service {
  icon: string;
  iconBgClass: string;
  title: string;
  description: string;
  learnMoreColor: string;
}

export interface Solution {
  id: string;
  tabTitle: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  backgroundColor: string;
  color: string;
  buttonText: string;
}

export interface CaseStudy {
  title: string;
  category: string;
  categoryBg: string;
  categoryText: string;
  roi: string;
  description: string;
  image: string;
}

export interface Testimonial {
  stars: number;
  text: string;
  author: {
    name: string;
    title: string;
    initials: string;
  };
}

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  privacy: boolean;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}
