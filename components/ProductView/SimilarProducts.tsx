import useRecommendations from '@hooks/useRecommendations';
import Image from 'next/image';
import React from 'react';

const SimilarProducts = ({ productId }) => {
  const { recommendations, loading } = useRecommendations(productId);
  const recommendationsData = React.useMemo(() => {
    return recommendations;
  }, [recommendations]);
  return (
    <>
      {recommendationsData?.length ? (
        <>
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Similar Products</h2>
          <p className="mt-4 text-base text-gray-500">Shop from a collection of similar products</p>
          <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-x-8">
            {recommendationsData?.slice(0, 5)?.map((product) => {
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
                    className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                  >
                    <Image
                      src={product?.imageUrl}
                      alt="Brown leather key ring with brass metal loops and rivets on wood table."
                      className="w-full h-full object-center object-cover"
                      layout="fill"
                    />
                  </div>
                  <p className="mt-4 text-xs text-gray-500 font-bold mb-2">{product?.retailer}</p>
                  <h3 className=" text-base font-semibold text-gray-900">{product?.name}</h3>
                  <p className="mt-2 text-lg text-gray-500">${product?.price}</p>
                </a>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
};

export default React.memo(SimilarProducts);
