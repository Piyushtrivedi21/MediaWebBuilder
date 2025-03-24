import { PortfolioItem } from "@/types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "ecommerce-redesign",
    title: "E-commerce Redesign",
    category: "Web Design",
    description: "Complete redesign increasing conversions by 45%",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fitness-brand-campaign",
    title: "Fitness Brand Campaign",
    category: "Social Media",
    description: "200% increase in social engagement within 3 months",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tech-startup-seo",
    title: "Tech Startup SEO",
    category: "SEO",
    description: "Improved organic traffic by 175% within 6 months",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

export const portfolioCategories = [
  { id: "all", label: "All" },
  { id: "web-design", label: "Web Design" },
  { id: "social-media", label: "Social Media" },
  { id: "seo", label: "SEO" },
  { id: "content", label: "Content" }
];
