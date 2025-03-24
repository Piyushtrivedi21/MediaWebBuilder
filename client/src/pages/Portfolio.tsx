import React from 'react';
import { useLocation } from 'wouter';

const Portfolio: React.FC = () => {
  const [, setLocation] = useLocation();

  // Redirect to home
  React.useEffect(() => {
    setLocation('/');
  }, []);

  return null;
};

export default Portfolio;