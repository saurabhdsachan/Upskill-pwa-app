import { StarIcon } from '@heroicons/react/solid';
import { blurredBgImage } from '@public/images/bg-base-64';
import { PLAN } from '@utils/constants';
import { classNames, getImageUrl } from '@utils/helpers';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import PlanHighlight from './PlanHighlight';

const PlanCard = ({ data, type, userId }: { data: any; type: 'v-card' | 'h-card'; userId: string }) => {
  const { query } = useRouter();

  return (
    <div className={classNames(type === 'v-card' ? 'flex-none' : 'flex-none px-3 first:pl-6 last:pr-6')}>
      <Link href={`/${query?.user}/${userId}/${PLAN}/book/${data?.sessionId}`}>
        <a>
          <div
            className={classNames(
              type === 'v-card' ? 'w-screen/2' : 'w-screen/3 max-w-[156px]',
              'flex flex-col justify-center gap-x-3'
            )}
          >
            <div className="w-full rounded-xl shadow-lg relative aspect-1 overflow-hidden">
              <Image
                className={classNames(!data?.coverImgUrl && 'blur', 'rounded-xl object-cover')}
                src={data?.coverImgUrl ? getImageUrl(data?.coverImgUrl, { height: 120, width: 120 }) : blurredBgImage}
                alt={data?.expertiseName}
                height={80}
                width={80}
                placeholder="blur"
                layout="responsive"
                blurDataURL={blurredBgImage}
              />
              <span className="absolute top-1 left-1 rounded-lg bg-white py-1 px-2 text-xs">{data?.categoryName}</span>
            </div>
            <PlanHighlight
              pax={data?.pax}
              numSessions={data?.numSessions}
              startTime={data?.startTime}
              duration={data?.duration}
              days={data?.days}
            />
            <div>
              <h4 className="leading-6 capitalize line-clamp-2 mt-2 mb-1">{data?.title}</h4>
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
              <h2 className="text-sm mt-1 font-normal">INR {data?.price}/-</h2>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PlanCard;
