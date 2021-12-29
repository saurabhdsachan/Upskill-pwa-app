import { ChevronRightIcon, HomeIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';
import { DesignViewInterface } from './types';

const Breadcrumb: React.FC<DesignViewInterface> = ({ design }) => {
  return (
    <div className="py-4">
      <nav className="flex" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div>
              <Link href="/">
                <a className="text-gray-400 hover:text-gray-500">
                  <HomeIcon className="w-4 h-4" />
                  <span className="sr-only">Home</span>
                </a>
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon className="w-4 h-4 text-gray-500" />
              <Link href="/interior-designs">
                <a className="ml-2 text-xs font-medium text-gray-500 hover:text-gray-700 capitalize">Ideas</a>
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon className="w-4 h-4 text-gray-500" />
              <Link href={`/collection/${design?.room?.slug}`}>
                <a className="ml-2 text-xs font-medium text-gray-500 hover:text-gray-700 capitalize">
                  {design?.room?.roomType}
                </a>
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon className="w-4 h-4 text-gray-500" />
              <a className="ml-2 text-xs font-medium text-gray-500 hover:text-gray-700 capitalize" aria-current="page">
                {design?.name}
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
