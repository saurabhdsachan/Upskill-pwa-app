import { blurredBgImage } from '@public/images/bg-base-64';
import Image from 'next/image';
import React from 'react';

const index = () => {
  return (
    <div className="relative bg-white mx-auto w-28 h-28 -mt-16 border-4 rounded-full border-white shadow-lg overflow-hidden">
      <Image
        className="object-cover rounded-full"
        src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=240"
        alt="Chef Jordan"
        width={180}
        height={180}
        placeholder="blur"
        layout="intrinsic"
        blurDataURL={blurredBgImage}
      />
    </div>
  );
};

export default index;
