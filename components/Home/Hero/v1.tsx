import dynamic from 'next/dynamic';
import React from 'react';

const BannerWithNoSSR = dynamic(() => import('./Banner'), { ssr: true });

const v1: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center">Hero</div>
    </div>
  );
};

export default React.memo(v1);
