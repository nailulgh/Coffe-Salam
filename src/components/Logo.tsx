import * as React from "react";

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      {...props}
    >
      {/* 8-Pointed Star (Rub el Hizb) faint background */}
      <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.15">
        <rect x="25" y="25" width="50" height="50" />
        <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
      </g>

      {/* Elegant Crescent Moon */}
      <path
        d="M 65 15 C 35 15 15 40 25 70 C 32 88 50 95 65 90 C 42 85 28 65 35 42 C 40 28 50 20 65 15 Z"
        fill="currentColor"
      />
      
      {/* Minimalist Coffee Cup */}
      <path
        d="M 38 45 L 68 45 C 68 45 70 70 53 70 C 36 70 38 45 38 45 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      
      {/* Cup Handle */}
      <path
        d="M 67 50 C 75 50 78 55 78 60 C 78 65 73 66 65 65"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Stylized Steam (Arabic calligraphy inspired) */}
      <path
        d="M 48 35 C 45 25 55 25 50 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 58 38 C 55 30 62 28 58 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Small Star in the sky */}
      <polygon 
        points="75,25 76.5,29 81,29.5 77.5,32.5 78.5,37 75,34.5 71.5,37 72.5,32.5 69,29.5 73.5,29" 
        fill="currentColor" 
      />
    </svg>
  );
}
