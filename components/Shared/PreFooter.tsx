import { blurredBgImage } from '@public/images/bg-base-64';
import Image from 'next/image';
import React from 'react';

const PreFooter: React.FC = () => (
  <div className="px-6 pt-20">
    <Image
      className="object-contain"
      src="https://res.cloudinary.com/dui8mpatf/image/upload/v1653278641/pep/on-top_tweyuz.svg"
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
