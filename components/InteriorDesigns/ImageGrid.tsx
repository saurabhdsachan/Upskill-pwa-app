import { blurredBgImage } from '@public/images/bg-base-64';
import Image from 'next/image';
import React from 'react';

type Images = {
  images: Array<string>;
};

const ImageGrid: React.FC<Images> = ({ images }) => {
  return (
    <div>
      <div className={`grid gap-6 2xl:gap-8 grid-rows-2 2xl:grid-rows-1 grid-cols-2 2xl:grid-cols-3`}>
        {images.slice(0, 3).map((image) => (
          <div className="aspect-w-16 aspect-h-9" key={image}>
            <Image
              className="object-cover"
              src={`https://res.cloudinary.com/spacejoy/image/upload/${image}`}
              layout="fill"
              alt="s"
              placeholder="blur"
              blurDataURL={blurredBgImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ImageGrid);
