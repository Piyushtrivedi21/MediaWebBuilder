export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits?: string[];
  whyChooseUs?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  content: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

export interface Career {
  id: string;
  title: string;
  type: string;
  location: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}