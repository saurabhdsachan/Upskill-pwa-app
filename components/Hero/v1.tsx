import Image from 'next/image';
import React from 'react';

const v1: React.FC = () => {
  return (
    <div className="rounded-xl overflow-hidden grayscale">
      <Image
        alt="backdrop"
        className="aspect-h-9 aspect-w-16 object-cover"
        src="https://res.cloudinary.com/dui8mpatf/image/upload/w_800/v1655103179/pep/jali_ugqyob.jpg"
        layout="responsive"
        height="250px"
        width="800px"
      />
    </div>
  );
};

export default React.memo(v1);
