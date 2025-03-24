import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: "smooth",

export const handleNavClick = (to: string, currentPath: string) => {
  if (currentPath === '/' && to.startsWith('/#')) {
    // Handle hash links on homepage
    const elementId = to.substring(2);
    scrollToElement(elementId);
    return false; // Prevent default navigation
  } else if (to === '/' || !to.startsWith('/#')) {
    // Navigate to new page and scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return true; // Allow navigation
};

    });
  }
}
