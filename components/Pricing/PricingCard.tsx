import { PricingData } from '@components/Pricing/PricingTypes';
import React from 'react';

interface PricingCardInterface {
  pricingItem: PricingData;
}

const PricingCard: React.FC<PricingCardInterface> = ({ pricingItem }) => {
  return (
    <div className="border border-gray-200 rounded-xl shadow-sm divide-y divide-gray-200" key={pricingItem?.name}>
      <div className="p-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900 capitalize">{pricingItem?.name}</h2>
        <p className="mt-2 text-sm text-gray-500">{pricingItem?.description}</p>
        <p className="mt-8">
          <span className="text-4xl font-extrabold text-gray-900">${pricingItem?.price.value}</span>
          <span className="text-base font-medium text-gray-500">/room</span>
        </p>
        <a
          href="#"
          className="mt-8 block w-full bg-gray-900 border border-gray-800 rounded-lg py-4 text-sm text-white text-center hover:bg-gray-900 capitalize"
        >
          Buy {pricingItem?.name}
        </a>
      </div>
      <div className="pt-6 pb-8 px-6">
        <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What&apos;s included</h3>
        <ul className="mt-6 space-y-4">
          {pricingItem?.features.map((feature) => (
            <li className="flex space-x-3" key={feature?._id}>
              <svg
                className="flex-shrink-0 h-5 w-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-gray-500">{feature?.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
