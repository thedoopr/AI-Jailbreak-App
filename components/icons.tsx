
import React from 'react';

export const CopyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
    >
        <path d="m12 3-1.9 1.9a2.5 2.5 0 0 0-3.2 0L3 8.8a2.5 2.5 0 0 0 0 3.2L8.8 16a2.5 2.5 0 0 0 3.2 0L16 12l4-4" />
        <path d="M12 3h.1" />
        <path d="M21 12v.1" />
        <path d="m8.8 3-5 5" />
        <path d="M3 8.8v.1" />
        <path d="M16 12h.1" />
    </svg>
);
