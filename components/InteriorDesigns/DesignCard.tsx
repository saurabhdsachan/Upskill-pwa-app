import { HeartIcon, ShareIcon } from '@heroicons/react/outline';
import { blurredBgImage } from '@public/images/bg-base-64';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface DesignCardInterface {
  cardData: {
    name: string;
    slug: string;
    cdnRender: Array<string>;
    room: {
      slug: string;
      roomType: string;
    };
  };
}

const DesignCard: React.FC<DesignCardInterface> = ({ cardData }) => {
  return (
    <Link href={`/interior-designs/${cardData?.slug}`}>
      <a>
        <div className="cursor-pointer group">
          <div className=" rounded overflow-hidden relative border border-gray-200 transition group-hover:shadow-md">
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            <Image
              className="object-cover transition duration-700 filter transform group-hover:brightness-110"
              alt={cardData?.name}
              src={`https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto,w_1000,h_600/${cardData?.cdnRender[0]}`}
              height="300"
              width="500"
              layout="responsive"
              placeholder="blur"
              blurDataURL={blurredBgImage}
            />
          </div>
          <div className="flex items-center my-2">
            <div className="flex-1 mr-2">
              <p className="text-gray-500 text-xs capitalize">{cardData?.room?.roomType}</p>
              <p className="text-gray-800 mt-1 transition group-hover:text-red-500">{cardData?.name}</p>
            </div>
            <div>
              <button
                type="button"
                className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
              >
                <span className="sr-only">Like</span>
                <HeartIcon className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
              >
                <span className="sr-only">Share</span>
                <ShareIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default DesignCard;
