import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative bg-white z-50 border-b" role="banner">
      <p className="text-sm py-3 text-center container mx-auto">Banner</p>
    </div>
  );
};

export default React.memo(Banner);
