import useProductDesignSets from '@hooks/useProductDesignSets';
import { blurredBgImage } from '@public/images/bg-base-64';
import { cloudinary } from '@utils/config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductDesignSet = ({ productIds }) => {
  const { designSetData } = useProductDesignSets([...productIds]);

  const designs = React.useMemo(() => {
    return Object.keys(designSetData).reduce((acc, curr) => {
      return [...acc, ...designSetData[curr]];
    }, []);
  }, [designSetData]);

  if (designs?.length === 0) return null;

  return (
    <div className="py-14">
      <h2 className="text-2xl tracking-wide">Explore Design Sets</h2>
      <p className="mt-2 text-gray-700">Remix design</p>
      <div className="mt-4 grid grid-cols-3 xl:grid-cols-6 gap-4">
        {designs?.slice(0, 5)?.map((product) => {
          return (
            <Link href={`/product-view/${product?._id}`} key={product?._id}>
              <a className="group block">
                <div className="bg-white aspect-w-3 aspect-h-2 rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-4">
                  <Image
                    src={`${cloudinary.baseDeliveryURL}/${product?.thumbnail}`}
                    alt="Brown leather key ring with brass metal loops and rivets on wood table."
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={blurredBgImage}
                    objectFit={'contain'}
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700 font-normal capitalize">{product?.name?.slice(0, -10)}</h3>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(ProductDesignSet);
