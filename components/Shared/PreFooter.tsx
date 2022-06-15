import { blurredBgImage } from '@public/images/bg-base-64';
import Image from 'next/image';
import React from 'react';

const PreFooter: React.FC = () => (
  <div className="px-6 pt-20">
    <Image
      className="object-contain"
      src="https://res.cloudinary.com/dui8mpatf/image/upload/w_800/v1653277990/pep/on-top_yea2ik.png"
      alt="pep on top"
      height={450}
      width={642}
      placeholder="blur"
      layout="responsive"
      blurDataURL={blurredBgImage}
    />
  </div>
);

export default PreFooter;
