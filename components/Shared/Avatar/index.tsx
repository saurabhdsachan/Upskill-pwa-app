import { blurredBgImage } from '@public/images/bg-base-64';
import { getImageUrl } from '@utils/helpers';
import Image from 'next/image';
import React from 'react';

const index = ({ source }) => {
  return (
    <div className="relative bg-white mx-auto w-28 h-28 -mt-16 border-4 rounded-full border-white shadow-lg overflow-hidden">
      {source && (
        <Image
          className="object-cover rounded-full"
          src={getImageUrl(source, { height: 180, width: 180 })}
          alt="Chef Jordan"
          width={180}
          height={180}
          placeholder="blur"
          layout="intrinsic"
          blurDataURL={blurredBgImage}
        />
      )}
    </div>
  );
};

export default index;
