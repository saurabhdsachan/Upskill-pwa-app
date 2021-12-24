import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

const BannerWithNoSSR = dynamic(() => import('./Banner'), { ssr: true });

const v1: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center">
        <div className="flex-1 w-1/3 lg:w-1/4 mr-8 xl:mr-16">
          <div className="overflow-hidden">
            <h1 className="lg:text-3xl xl:text-5xl mb-4 lg:semibold xl:font-extrabold tracking-tight">Live in joy</h1>
          </div>
          <div className="overflow-hidden">
            <p className="mb-4 text-gray-600">
              Design a stunning home with handpicked products from top brands that you can shop instantly
            </p>
          </div>
          <div className="overflow-hidden pb-4 pt-1">
            <button
              type="button"
              className="group overflow-hidden shadow-sm hover:shadow-lg text-base text-white py-3 xl:py-4 px-4 xl:px-10 rounded-xl bg-gray-900 tracking-wide focus:ml-0.5 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white focus:ring-gray-400 focus:outline-none"
            >
              Start Project Now <ArrowNarrowRightIcon className="inline h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </div>
          <div className="overflow-hidden">
            <p>
              <Link href="/pricing">
                <a className="px-1 text-gray-600 text-sm rounded hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none">
                  Checkout packages now
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="w-2/3 lg:w-3/4">
          <BannerWithNoSSR />
        </div>
      </div>
    </div>
  );
};

export default React.memo(v1);
