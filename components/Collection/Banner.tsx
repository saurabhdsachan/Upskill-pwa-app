import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { Tween } from 'react-gsap';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

interface BannerProps {
  data: {
    publishedDate?: string;
    name?: string;
    description?: string;
    coverImg?: string;
  };
}

const CollectionBanner: React.FC<BannerProps> = ({ data }) => {
  const date = new Date(data?.publishedDate || '');
  const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center xl:space-x-10 2xl:space-x-20">
        <div className="max-w-4xl">
          <Tween from={{ opacity: 0, x: 20 }} to={{ opacity: 1, x: 0 }} duration={1} stagger={0.5}>
            <p className="text-sm text-gray-600 mb-2">{formattedDate}</p>
            <h1 className="text-2xl lg:text-5xl lg:leading-snug text-gray-900 mb-4">{data?.name}</h1>
            <p className="h-24 mt-4 mb-8 overflow-hidden overflow-ellipsis text-sm text-gray-600">
              {data?.description}
            </p>
            <button
              type="button"
              className="group shadow-xs hover:shadow-md text-base text-white py-3 px-12 rounded-xl bg-gray-900 focus:ring-1 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-400 focus:outline-none"
            >
              Start Project <ArrowNarrowRightIcon className="inline h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </Tween>
        </div>
      </div>
    </div>
  );
};

export default CollectionBanner;
