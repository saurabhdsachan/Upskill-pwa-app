import { BookOpenIcon } from '@heroicons/react/outline';
import { blurredBgImage } from '@public/images/bg-base-64';
import { getImageUrl } from '@utils/helpers';
import Image from 'next/image';
import React from 'react';

const Episodes = ({ data }) => {
  return (
    <div className="mt-4">
      <h2 className="font-bold mb-4">{data?.length} Episodes</h2>
      {data?.map((item, index) => (
        <div className="mb-6 bg-slate-100 p-6 rounded-xl" key={item?.episodeId}>
          <div className="flex space-x-4 items-end mb-6">
            <div className="flex-1">
              <div>
                <BookOpenIcon className="w-6 h-6 mb-2" />
                <h3 className="font-bold">
                  {index + 1}- {item?.title}
                </h3>
              </div>
            </div>
            <div className="relative bg-white w-20 h-20 rounded-xl border-2 border-white shadow overflow-hidden">
              <Image
                className="object-cover rounded-xl"
                src={
                  item?.coverImageUrl
                    ? getImageUrl(item?.coverImageUrl, { height: 180, width: 180 })
                    : 'https://images.unsplash.com/photo-1602464729960-f95937746b68?auto=format&fit=crop&w=200'
                }
                alt={item?.user?.name}
                width={80}
                height={80}
                placeholder="blur"
                layout="intrinsic"
                blurDataURL={blurredBgImage}
              />
            </div>
          </div>
          <div>
            <p className="prose prose-sm whitespace-pre-line" dangerouslySetInnerHTML={{ __html: item?.description }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Episodes;
