import React from 'react';

const ProductCardDimmer: React.FC = () => {
  return (
    <div className="animate-pulse bg-white p-4 xl:p-8 rounded-lg">
      <div className="aspect-w-7 aspect-h-8 bg-gray-100 rounded-lg" />
      <div className="space-y-3 pt-4">
        <div className="h-2 bg-gray-100 rounded-sm w-1/2" />
        <div className="h-3 bg-gray-100 rounded-sm" />
        <div className="h-3 bg-gray-100 rounded-sm w-4/6" />
        <div className="h-5 bg-gray-100 rounded-sm w-1/3" />
      </div>
    </div>
  );
};

export default React.memo(ProductCardDimmer);
