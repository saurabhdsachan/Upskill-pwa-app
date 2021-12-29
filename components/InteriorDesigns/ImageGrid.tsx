import { blurredBgImage } from '@public/images/bg-base-64';
import Image from 'next/image';
import React from 'react';

type Images = {
  images: Array<string>;
};

const ImageGrid: React.FC<Images> = ({ images }) => {
  return (
    <div>
      <div className={`grid gap-4 grid-rows-1 grid-cols-2`}>
        {images.slice(0, 2).map((image) => (
          <div className="aspect-w-16 aspect-h-9 shadow-lg" key={image}>
            <Image
              className="object-cover rounded-lg"
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
