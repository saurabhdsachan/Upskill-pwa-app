import React from 'react';

const CollectionCardDimmer: React.FC = () => {
  return (
    <div className="h-96 animate-pulse">
      <div className="h-3/4 bg-gray-200" />
      <div className="space-y-2 pt-4">
        <div className="h-4 bg-gray-200 rounded-sm" />
        <div className="h-4 bg-gray-200 rounded-sm w-5/6" />
      </div>
    </div>
  );
};

export default CollectionCardDimmer;
