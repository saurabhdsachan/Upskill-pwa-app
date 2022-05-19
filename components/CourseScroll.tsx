import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import { UnsplashData } from '@mocks/Unsplash';
import Link from 'next/link';
import React from 'react';
import CourseCard from './Cards/CourseCard';

const CourseScroll = () => {
  return (
    <section>
      <div className="px-6 py-4">
        <div className="flex">
          <div className="flex-1">
            <h3>Courses</h3>
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
          {UnsplashData.slice(14, 20).map((item) => (
            <CourseCard key={item.imageThumbnail} src={item.imageThumbnail} type="h-card" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseScroll;
