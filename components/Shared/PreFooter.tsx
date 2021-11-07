import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';

const PreFooter: React.FC = () => (
  <div className="relative py-28">
    <div className="relative">
      <div className="text-center">
        <h2 className="font-bold text-gray-700 mb-7 tracking-tight text-4xl">Ready to get started</h2>
        <button
          type="button"
          className="group shadow-xs hover:shadow-md text-base text-white py-3 px-12 rounded-xl bg-gray-900 focus:ring-1 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-400 focus:outline-none"
        >
          Start Project <ArrowNarrowRightIcon className="inline h-4 w-4 transition group-hover:translate-x-1" />
        </button>
        <p className="mt-5">
          <Link href="/pricing">
            <a className="px-1 text-gray-600 text-sm rounded hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none">
              Checkout packages now
            </a>
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default PreFooter;
