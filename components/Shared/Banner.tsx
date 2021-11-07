import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative bg-white z-50 border-b" role="banner">
      <p className="text-sm py-3 text-center container mx-auto">
        Season Beckons with our freshest sale. Get <strong>20% Off</strong> design packages. Use code:{' '}
        <strong>SPRING20</strong>
      </p>
    </div>
  );
};

export default React.memo(Banner);
