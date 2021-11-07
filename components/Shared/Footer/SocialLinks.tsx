import { company } from '@utils/config';
import React from 'react';

const SocialLinks: React.FC = () => {
  return (
    <div className="mt-6 flex space-x-3">
      <a
        href={company.social.sites.facebook}
        className="text-gray-800 bg-gray-100 p-2 hover:text-blue-800 focus:ring-1 focus:ring-gray-500 focus:outline-none rounded"
      >
        <span className="sr-only">Facebook</span>
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
          <path
            d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
            fillRule="evenodd"
          />
        </svg>
      </a>
      <a
        href={company.social.sites.instagram}
        className="text-gray-800 bg-gray-100 p-2 hover:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none rounded"
      >
        <span className="sr-only">Instagram</span>
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
          <path d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32zm28 130.67a28 28 0 1 1 28-28 27.94 27.94 0 0 1-28 28zM256 181.33A74.67 74.67 0 1 1 181.33 256 74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112 112 112 0 0 0-112-112z" />
        </svg>
      </a>
      <a
        href={company.social.sites.twitter}
        className="text-gray-800 bg-gray-100 p-2 hover:text-blue-400 focus:ring-1 focus:ring-gray-500 focus:outline-none rounded"
      >
        <span className="sr-only">Twitter</span>
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
          <path d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3 97.51 97.51 0 0 0 43.33-53.6 197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1 280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4 94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5z" />
        </svg>
      </a>
      <a
        href={company.social.sites.linkedin}
        className="text-gray-800 bg-gray-100 p-2 hover:text-blue-800 focus:ring-1 focus:ring-gray-500 focus:outline-none rounded"
      >
        <span className="sr-only">LinkedIn</span>
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
          <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
        </svg>
      </a>
      <a
        href={company.social.sites.pinterest}
        className="text-gray-800 bg-gray-100 p-2 hover:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none rounded"
      >
        <span className="sr-only">Pinterest</span>
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
          <path d="M256.05 32c-123.7 0-224 100.3-224 224 0 91.7 55.2 170.5 134.1 205.2-.6-15.6-.1-34.4 3.9-51.4l28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58 20.4 0 30.2 15.3 30.2 33.6 0 20.5-13.1 51.1-19.8 79.5-5.6 23.8 11.9 43.1 35.4 43.1 42.4 0 71-54.5 71-119.1 0-49.1-33.1-85.8-93.2-85.8-67.9 0-110.3 50.7-110.3 107.3 0 19.5 5.8 33.3 14.8 43.9 4.1 4.9 4.7 6.9 3.2 12.5l-4.6 18c-1.5 5.7-6.1 7.7-11.2 5.6-31.3-12.8-45.9-47-45.9-85.6 0-63.6 53.7-139.9 160.1-139.9 85.5 0 141.8 61.9 141.8 128.3 0 87.9-48.9 153.5-120.9 153.5-24.2 0-46.9-13.1-54.7-27.9l-15.8 61.6c-4.7 17.3-14 34.5-22.5 48a225.13 225.13 0 0 0 63.5 9.2c123.7 0 224-100.3 224-224S379.75 32 256.05 32z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;
