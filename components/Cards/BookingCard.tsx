import Bullets from '@components/Shared/Bullets';
import Tags from '@components/Shared/Tags';
import { useDataBusStore } from '@context/dataBusContext';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import { blurredBgImage } from '@public/images/bg-base-64';
import { FEED_TYPE } from '@utils/constants';
import { classNames, formatPrice, getImageUrl } from '@utils/helpers';
import Image from 'next/image';
import React from 'react';
import { If, Then } from 'react-if';

const BookingCard = ({ data: { booking }, type }) => {
  const { updateBottomSheetState } = useDataBusStore();

  const tagNames = () => {
    const tmp = [];
    booking?.chips?.map((chip) => tmp.push(chip?.chipName));

    return tmp;
  };

  return (
    <div className="mb-4 rounded-xl bg-white border border-slate-200 shadow-xs">
      <div className="flex space-x-4 p-4">
        <div className="flex-1">
          <h3 className="text-lg capitalize">
            {booking?.label}{' '}
            {booking.bookingStatus === 'CANCELLED' ? (
              <XCircleIcon className="w-5 h-5 inline text-red-400" />
            ) : (
              <CheckCircleIcon className="w-5 h-5 inline text-blue-500" />
            )}
          </h3>
          <small className="text-slate-600 text-xs">
            {'INR'} {formatPrice.format(200)}
          </small>
        </div>
        <div className="w-14 h-14 rounded-xl shadow relative aspect-1 overflow-hidden">
          <Image
            className={classNames('rounded-xl object-cover')}
            src={booking?.coverImgUrl ? getImageUrl(booking?.coverImgUrl, { height: 180, width: 180 }) : blurredBgImage}
            alt={'xy'}
            height={40}
            width={40}
            placeholder="blur"
            layout="responsive"
            blurDataURL={blurredBgImage}
          />
        </div>
      </div>
      <Tags data={tagNames()} />
      <div className="px-4 pb-4">
        <Bullets data={booking?.bullets} />
        <If condition={type === FEED_TYPE.PAST}>
          <Then>
            <div className="flex mt-4 space-x-4">
              <button
                onClick={() => updateBottomSheetState(true)}
                className="inline-flex items-center justify-center w-full py-2 border border-slate-400 rounded-xl text-sm font-medium focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-200 shadow-sm"
              >
                Rate Session
              </button>
              <button
                onClick={() => updateBottomSheetState(true)}
                className="inline-flex items-center justify-center w-full py-2 border border-slate-400 rounded-xl text-sm font-medium focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-200 shadow-sm"
              >
                View Recording
              </button>
            </div>
          </Then>
        </If>
        <If condition={type === FEED_TYPE.TODAY}>
          <Then>
            <div className="flex mt-4 space-x-4">
              <button
                onClick={() => updateBottomSheetState(true)}
                className="uppercase inline-flex items-center justify-center w-full py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-400"
              >
                LIVE - JOIN NOW
              </button>
            </div>
          </Then>
        </If>
      </div>
    </div>
  );
};

export default BookingCard;
