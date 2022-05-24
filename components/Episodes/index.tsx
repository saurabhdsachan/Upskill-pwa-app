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
                <small className="text-xs text-slate-600">Chapter {index + 1}</small>
                <h3 className="font-bold">{item?.title}</h3>
              </div>
            </div>
            <div className="relative bg-white w-20 h-20 rounded-xl border-2 border-white shadow overflow-hidden">
              <Image
                className="object-cover rounded-xl"
                src={
                  item?.coverImageUrl ? getImageUrl(item?.coverImageUrl, { height: 180, width: 180 }) : blurredBgImage
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
