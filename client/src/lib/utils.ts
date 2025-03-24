
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: "smooth",
    });
  }
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export const handleNavClick = (to: string, currentPath: string) => {
  // Handle home page hash links
  if (currentPath === '/' && to.startsWith('/#')) {
    const elementId = to.substring(2);
    scrollToElement(elementId);
    return false; // Prevent default navigation
  }
  
  // Handle non-hash links - scroll to top
  if (!to.includes('#')) {
    scrollToTop();
  }
  
  return true; // Allow navigation
};
