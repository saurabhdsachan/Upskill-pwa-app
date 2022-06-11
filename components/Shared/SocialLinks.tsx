import React from 'react';

interface ISocialLinks {
  twitter?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
}
const SocialLinks: React.FC<ISocialLinks> = ({ twitter, facebook, instagram, youtube }) => {
  return (
    <div className="my-6 justify-center flex space-x-2">
      {facebook && (
        <a
          href={facebook}
          className="text-slate-800 bg-slate-100 p-2 hover:text-blue-800 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-xl"
        >
          <span className="sr-only">Facebook</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
            <path
              d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
              fillRule="evenodd"
            />
          </svg>
        </a>
      )}
      {instagram && (
        <a
          href={instagram}
          className="text-slate-800 bg-slate-100 p-2 hover:text-red-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-xl"
        >
          <span className="sr-only">Instagram</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
            <path d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32zm28 130.67a28 28 0 1 1 28-28 27.94 27.94 0 0 1-28 28zM256 181.33A74.67 74.67 0 1 1 181.33 256 74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112 112 112 0 0 0-112-112z" />
          </svg>
        </a>
      )}
      {twitter && (
        <a
          href={twitter}
          className="text-slate-800 bg-slate-100 p-2 hover:text-blue-400 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-xl"
        >
          <span className="sr-only">Twitter</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
            <path d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3 97.51 97.51 0 0 0 43.33-53.6 197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1 280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4 94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5z" />
          </svg>
        </a>
      )}
      {youtube && (
        <a
          href={youtube}
          className="text-slate-800 bg-slate-100 p-2 hover:text-red-600 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-xl"
        >
          <span className="sr-only">youtube</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 50 50" aria-hidden="true">
            <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default React.memo(SocialLinks);
