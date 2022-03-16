import { ExternalLinkIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const career: React.FC = () => {
  return (
    <div className="relative antialiased bg-gray-100 mt-28">
      <div className="h-56 bg-gray-300 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <Image
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?auto=format&fit=crop&w=1200&q=80"
          alt="full design banner"
          layout="fill"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <p className="text-gray-900">Award winning support</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</h2>
          <p className="mt-3 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
            scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link href="/career">
                <a className="focus:outline-none hover:shadow-md py-3 px-8 rounded-xl bg-gray-900 text-white">
                  See all open positions <ExternalLinkIcon className="inline w-4 h-4" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default career;
