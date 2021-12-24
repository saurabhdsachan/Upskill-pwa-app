import React from 'react';

const ProductCardDimmer: React.FC = () => {
  return (
    <div className="h-96 animate-pulse bg-white p-4 xl:p-8 rounded-lg">
      <div className="h-3/4 bg-gray-100 rounded-lg" />
      <div className="space-y-2 pt-4">
        <div className="h-2 bg-gray-100 rounded-sm" />
        <div className="h-3 bg-gray-100 rounded-sm w-5/6" />
      </div>
    </div>
  );
};

export default React.memo(ProductCardDimmer);
