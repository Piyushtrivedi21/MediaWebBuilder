import { Variants } from "framer-motion";

export const fadeIn = (delay: number = 0): Variants => ({
  hidden: { 
    opacity: 0,
    y: 20 
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut"
    }
  }
});

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const slideInFromRight = (delay: number = 0): Variants => ({
  hidden: { 
    x: 50,
    opacity: 0 
  },
  visible: { 
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut"
    }
  }
});

export const slideInFromLeft = (delay: number = 0): Variants => ({
  hidden: { 
    x: -50,
    opacity: 0 
  },
  visible: { 
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut"
    }
  }
});

export const scaleUpOnHover: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 400, damping: 10 }
};
