import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import { UnsplashData } from '@mocks/Unsplash';
import Link from 'next/link';
import React from 'react';
import PlanCard from './Cards/PlanCard';

const PlanScroll = () => {
  return (
    <section>
      <div className="px-6 py-4">
        <div className="flex">
          <div className="flex-1">
            <h3>Packages</h3>
          </div>
          <div>
            <Link href="/chef-jordan/workshops">
              <a>
                <small className="text-xs text-slate-600">
                  See all <ChevronDoubleRightIcon className="w-2 h-2 inline" />{' '}
                </small>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative overflow-auto">
        <div className="overflow-x-auto flex no-scrollbar">
          {UnsplashData.slice(0, 8).map((item) => (
            <PlanCard key={item.imageThumbnail} src={item.imageThumbnail} type="h-card" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanScroll;
