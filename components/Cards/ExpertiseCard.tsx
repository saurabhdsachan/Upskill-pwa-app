import { StarIcon } from '@heroicons/react/solid';
import { blurredBgImage } from '@public/images/bg-base-64';
import { classNames, getImageUrl } from '@utils/helpers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ExpertiseCard = ({ data, type }: { data: IExpertise; type: 'v-card' | 'h-card' }) => {
  return (
    <div className={classNames(type === 'v-card' ? 'flex-none' : 'flex-none px-3 first:pl-6 last:pr-6')}>
      <Link href={`/chef-jordan/workshops/book/learn-cooking-in-5-days`}>
        <a>
          <div
            className={classNames(
              type === 'v-card' ? 'w-screen/2' : 'w-screen/3',
              'flex flex-col justify-center gap-3  min-w-[130px] max-w-[156px]'
            )}
          >
            {data?.coverImageUrl && (
              <div className="w-full rounded-xl shadow-lg relative">
                <Image
                  className="rounded-xl object-cover"
                  src={getImageUrl(data?.coverImageUrl, { height: 120, width: 120 })}
                  alt={data?.expertiseName}
                  height={80}
                  width={80}
                  placeholder="blur"
                  layout="responsive"
                  blurDataURL={blurredBgImage}
                />
              </div>
            )}
            <div>
              <h4 className="leading-8 capitalize">{data?.expertiseName}</h4>
              <p className="text-xs mb-2 text-slate-600">{data?.subLabel}</p>
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
              <h2 className="text-sm mt-1 font-normal">
                {data?.currencyCode} {data?.price}/-
              </h2>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ExpertiseCard;
