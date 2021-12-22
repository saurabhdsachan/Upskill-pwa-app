import useProductDesignSets from '@hooks/useProductDesignSets';
import { blurredBgImage } from '@public/images/bg-base-64';
import { cloudinary } from '@utils/config';
import Image from 'next/image';
import React from 'react';

const ProductDesignSet = ({ productIds }) => {
  const { loading, error, designSetData } = useProductDesignSets([...productIds]);

  const designs = React.useMemo(() => {
    return Object.keys(designSetData).reduce((acc, curr) => {
      return [...acc, ...designSetData[curr]];
    }, []);
  }, [designSetData]);

  return (
    <>
      {designs?.length ? (
        <>
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Explore Design Sets</h2>

          <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-x-8">
            {designs?.slice(0, 5)?.map((product) => {
              return (
                <a
                  href={`/product-view/${product?._id}`}
                  target="_blank"
                  className="group block"
                  key={product?._id}
                  rel="noreferrer"
                >
                  <div
                    aria-hidden="true"
                    className="relative aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-4"
                  >
                    <Image
                      src={`${cloudinary.baseDeliveryURL}/${product?.thumbnail}`}
                      alt="Brown leather key ring with brass metal loops and rivets on wood table."
                      layout="fill"
                      placeholder="blur"
                      blurDataURL={blurredBgImage}
                      objectFit={'contain'}
                    />
                  </div>

                  <h3 className=" text-base font-semibold text-gray-900 capitalize">{product?.name?.slice(0, -10)}</h3>
                  <p className="mt-2 text-lg text-gray-500">${product?.price?.toFixed(2)}</p>
                </a>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
};

export default React.memo(ProductDesignSet);
