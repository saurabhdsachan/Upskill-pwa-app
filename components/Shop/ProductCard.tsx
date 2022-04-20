import { blurredBgProduct } from '@public/images/bg-base-64';
import { cloudinary } from '@utils/config';
import { currencyFormat } from '@utils/helpers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProductCardType = {
  product: {
    _id: string;
    cdn: string;
    retailer: string;
    name: string;
    displayPrice?: string;
    price: number;
    msrp: number;
  };
};

const ProductCard = ({ product }: ProductCardType) => (
  <div>
    <Link href={`/product-view/${product?._id}`}>
      <a>
        <div className="bg-white p-4 2xl:p-8 rounded-lg h-full">
          <div className="w-full mb-2 aspect-w-1 aspect-h-1">
            <Image
              src={`${cloudinary?.baseDeliveryURL}/fl_lossy,q_auto,w_400/${product?.cdn}`}
              alt={product?.name}
              className="w-full h-full object-center object-contain"
              layout="fill"
              placeholder="blur"
              blurDataURL={blurredBgProduct}
            />
          </div>
          <small className="mt-4 text-xs text-gray-500">{product?.retailer}</small>
          <h3 className="text-md text-gray-700 overflow-ellipsis line-clamp-2">{product?.name}</h3>
          <p className="text-lg font-medium text-gray-900 mt-1">
            <span>{currencyFormat(product?.price)}</span>
            {product?.msrp && product?.msrp > 0 && product?.msrp > product?.price && (
              <small className="text-sm text-gray-500 line-through inline-block ml-2">
                {currencyFormat(product?.msrp)}
              </small>
            )}
          </p>
        </div>
      </a>
    </Link>
  </div>
);
export default React.memo(ProductCard);
