import React from 'react';

const DesignCardDimmer: React.FC = () => {
  return (
    <div className="h-80 animate-pulse">
      <div className="h-3/4 bg-gray-200 rounded-sm" />
      <div className="space-y-3 pt-4">
        <div className="flex space-x-3">
          <div className="w-1/2 h-4 bg-gray-200 rounded-md" />
          <div className="w-1/5 h-4 bg-gray-200 rounded-md" />
        </div>
        <div className="h-4 bg-gray-200 rounded-md" />
      </div>
    </div>
  );
};

export default React.memo(DesignCardDimmer);
