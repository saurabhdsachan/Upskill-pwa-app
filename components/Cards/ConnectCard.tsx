import { StarIcon } from '@heroicons/react/solid';
import { blurredBgImage } from '@public/images/bg-base-64';
import { SESSION_TYPE } from '@utils/constants';
import { classNames, getImageUrl } from '@utils/helpers';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const ConnectCard = ({ data, type, userId }: { data: IExpertise; type: 'v-card' | 'h-card'; userId: string }) => {
  const { query } = useRouter();

  return (
    <div className={classNames(type === 'v-card' ? 'flex-none' : 'flex-none px-3 first:pl-6 last:pr-6')}>
      <Link href={`/${query?.user}/${userId}/${SESSION_TYPE.CONNECT}/book/${data?.expertiseId}`}>
        <a>
          <div
            className={classNames(
              type === 'v-card' ? 'w-screen/2' : 'w-screen/3 max-w-[156px]',
              'flex flex-col justify-center gap-3'
            )}
          >
            <div className="w-full rounded-xl shadow-lg relative aspect-1 overflow-hidden">
              <Image
                className={classNames(!data?.coverImageUrl && 'blur', 'rounded-xl object-cover')}
                src={
                  data?.coverImageUrl ? getImageUrl(data?.coverImageUrl, { height: 120, width: 120 }) : blurredBgImage
                }
                alt={data?.expertiseName}
                height={80}
                width={80}
                placeholder="blur"
                layout="responsive"
                blurDataURL={blurredBgImage}
              />
            </div>
            <div>
              <h4 className="leading-6 capitalize line-clamp-2 mb-1">{data?.expertiseName}</h4>
              <p className="text-xs mb-2 text-slate-600">{data?.subLabel}</p>
              <div className="flex items-center mb-1">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      parseInt(data?.rating) > rating ? 'text-yellow-500' : 'text-gray-200',
                      'h-4 w-4 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                ))}{' '}
                <small className="text-xs text-slate-600 ml-1">
                  {data?.rating} ({data?.numRatings})
                </small>
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

export default ConnectCard;
