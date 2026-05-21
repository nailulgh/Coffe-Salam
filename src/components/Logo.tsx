import * as React from "react";

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      {...props}
    >
      {/* 8-Pointed Star (Rub el Hizb) faint background */}
      <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2">
        <rect x="25" y="25" width="50" height="50" rx="2" />
        <rect x="25" y="25" width="50" height="50" rx="2" transform="rotate(45 50 50)" />
      </g>

      {/* Elegant minimalist coffee cup body */}
      <path
        d="M 35 48 C 35 63, 40 70, 50 70 C 60 70, 65 63, 65 48 Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M 35 48 C 35 63, 40 70, 50 70 C 60 70, 65 63, 65 48"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Cup handle forming a crescent moon shape */}
      <path
        d="M 64 51 C 70 51, 74 54, 74 59 C 74 64, 70 67, 64 67"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Saucer */}
      <path
        d="M 30 76 L 70 76"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Steam lines that double as elegant calligraphy waves */}
      <path
        d="M 45 38 C 43 30, 49 28, 46 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 54 41 C 52 33, 58 31, 55 23"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* A single minimalist star in the sky */}
      <path
        d="M 72 24 L 73.5 28 L 77.5 28 L 74 30.5 L 75.5 34.5 L 72 32 L 68.5 34.5 L 70 30.5 L 66.5 28 L 70.5 28 Z"
        fill="currentColor"
      />
    </svg>
  );
}
