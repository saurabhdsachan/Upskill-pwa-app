import { blurredBgImage } from '@public/images/bg-base-64';
import Image from 'next/image';
import React from 'react';

type Images = {
  images: Array<string>;
};

const getGridSize = (size) => {
  switch (size) {
    case 3:
      return 3;
    case 4:
      return 2;
    case 5:
      return 3;
    default:
      break;
  }
};

const ImageGrid: React.FC<Images> = ({ images }) => {
  return (
    <div className={`overflow-hidden rounded-xl grid gap-4 grid-rows-1 grid-cols-${getGridSize(images.length)}`}>
      {images.map((image) => (
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
  );
};

export default ImageGrid;
