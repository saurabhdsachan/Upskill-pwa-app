import { StarIcon } from '@heroicons/react/solid';
import { blurredBgImage } from '@public/images/bg-base-64';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const PlanCard = ({ src, type }: { src: string; type: 'v-card' | 'h-card' }) => {
  return (
    <div className={classNames(type === 'v-card' ? 'flex-none' : 'flex-none px-3 first:pl-6 last:pr-6')}>
      <Link href="/chef-jordan/workshops/book/learn-cooking-in-5-days">
        <a>
          <div
            className={classNames(
              type === 'v-card' ? 'w-screen/2' : 'w-screen/3',
              'flex flex-col items-center justify-center gap-3  min-w-[130px] max-w-[156px]'
            )}
          >
            <div className="w-full rounded-xl shadow-lg relative overflow-hidden">
              <Image
                className="rounded-xl object-cover"
                src={src}
                alt="Chef Jordan"
                height={80}
                width={80}
                placeholder="blur"
                layout="responsive"
                blurDataURL={blurredBgImage}
              />
              <span className="absolute top-1 left-1 rounded-lg bg-white py-1 px-2 text-xs max-w-9/12 text-ellipsis overflow-hidden">
                Career Counseling
              </span>
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
        </a>
      </Link>
    </div>
  );
};

export default PlanCard;
