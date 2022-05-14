import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const CourseCard = ({ src }: { src: string }) => {
  return (
    <div className="flex-none px-3 first:pl-6 last:pr-6">
      <div className="flex flex-col items-center justify-center gap-3 w-screen/3">
        <div className="w-full rounded-xl shadow-lg relative">
          <Image
            className="rounded-xl object-cover"
            src={src}
            alt="Chef Jordan"
            height={'80'}
            width={'80'}
            layout="responsive"
          />
          <span className="absolute top-1 left-1 rounded-lg bg-white py-1 px-2 text-xs">Career Counseling</span>
        </div>
        <div>
          <h4 className="mb-1">Cooking with Saurabh</h4>
          <div className="flex items-center mb-1">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(5 > rating ? 'text-yellow-500' : 'text-gray-200', 'h-4 w-4 flex-shrink-0')}
                aria-hidden="true"
              />
            ))}{' '}
            <small className="text-xs text-slate-600 ml-1">5 (25)</small>
          </div>
          <p className="text-slate-600 text-xs">May 15, 2020</p>
          <p className="text-slate-600 text-xs">5:00 PM</p>
          <h2 className="text-sm mt-1 font-normal">INR 2400/-</h2>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
