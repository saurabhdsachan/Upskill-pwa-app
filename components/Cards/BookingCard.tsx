import Bullets from '@components/Shared/Bullets';
import Tags from '@components/Shared/Tags';
import { blurredBgImage } from '@public/images/bg-base-64';
import { classNames, formatPrice, getImageUrl } from '@utils/helpers';
import Image from 'next/image';
import React from 'react';

const BookingCard = ({ data: { booking } }) => {
  const tagNames = () => {
    const tmp = [];
    booking?.chips?.map((chip) => tmp.push(chip?.chipName));

    return tmp;
  };

  return (
    <div className="p-4 mb-4 rounded-xl bg-white border border-slate-200 shadow-xs">
      <div className="flex space-x-4">
        <div className="flex-1">
          <h3 className="text-lg capitalize">{booking?.label}</h3>
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
      <Bullets data={booking?.bullets} />
    </div>
  );
};

export default BookingCard;
