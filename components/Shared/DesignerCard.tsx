import { blurredBgImage } from '@public/images/bg-base-64';
import Image from 'next/image';
import React from 'react';

const DesignerCard = () => {
  return (
    <div className="bg-white rounded-lg p-4 2xl:p-8">
      <h3 className="text-lg mb-4">About the Designer</h3>
      <div className="flex space-x-4 mb-4 items-center">
        <div>
          <Image
            className="object-cover rounded-xl"
            src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto,w_200/v1617712167/web/avatars/Chloe_Lehman_Portrait_-_Chloe_Lehman_ooxhxu.webp"
            alt="Chloe Lehman"
            height="80"
            width="80"
            placeholder="blur"
            blurDataURL={blurredBgImage}
          />
        </div>
        <div>
          <h4>Chloe Lehman</h4>
          <p className="text-xs text-gray-500 mt-1">Spacejoy Designer</p>
          <p className="text-xs text-gray-500 mt-1">1273 Designs</p>
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        Based in Pittsburgh, Chloe&apos;s experience in interior design, merchandising and product development helps her
        bring a keen eye to her designs. Chloe enjoys designing spaces that are warm, inviting and functional and loves
        adding rustic touches into her designs.
      </p>
      <a className="text-gray-700 text-sm py-1.5 px-3 rounded-lg border border-gray-900 bg-white hover:bg-gray-100">
        Consult Now
      </a>
      <a className="text-white text-sm py-1.5 px-3 rounded-lg border border-gray-700 bg-gray-900 hover:bg-gray-700 ml-4">
        Start Project
      </a>
    </div>
  );
};

export default DesignerCard;
