import { IconType } from "react-icons";
import { FaSearch, FaCode, FaMobileAlt, FaPencilAlt, FaBullhorn, FaChartLine } from "react-icons/fa";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  features: string[];
  benefits?: string[]; // Added optional benefits field
  whyChooseUs?: string; // Added optional whyChooseUs field
}

export const services: Service[] = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    description: "Boost your online visibility and drive organic traffic with our data-driven SEO strategies.",
    icon: FaSearch,
    features: [
      "Keyword Research & Analysis",
      "On-Page SEO Optimization",
      "Technical SEO Audits",
      "Link Building Strategies"
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Custom web solutions built with cutting-edge technologies to bring your vision to life.",
    icon: FaCode,
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "CMS Development",
      "Web Applications"
    ]
  },
  {
    id: "mobile-dev",
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    icon: FaMobileAlt,
    features: [
      "iOS Development",
      "Android Development",
      "Cross-Platform Solutions",
      "App Maintenance"
    ]
  },
  {
    id: "content",
    title: "Content Creation",
    description: "Engaging content that tells your story and connects with your audience.",
    icon: FaPencilAlt,
    features: [
      "Copywriting",
      "Blog Posts",
      "Social Media Content",
      "Email Campaigns"
    ]
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that drive results and ROI.",
    icon: FaBullhorn,
    features: [
      "Social Media Marketing",
      "Email Marketing",
      "PPC Campaigns",
      "Marketing Strategy"
    ]
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    description: "Data-driven insights to optimize your digital performance and growth.",
    icon: FaChartLine,
    features: [
      "Performance Tracking",
      "Conversion Analysis",
      "Custom Reports",
      "Growth Recommendations"
    ]
  }
];

export default services;