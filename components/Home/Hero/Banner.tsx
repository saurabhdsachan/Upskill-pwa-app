import Image from 'next/image';
import React from 'react';

const Banner: React.FC = () => {
  return (
    <Image
      className="object-cover filter contrast-115 brightness-110"
      src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,h_1050,w_1671/v1622172527/spj-v2/spj-happy-customer_ahkoxm.jpg"
      alt="spacejoy happy customer"
      height={'700'}
      width={'1114'}
      layout="responsive"
      priority
    />
  );
};

export default React.memo(Banner);
