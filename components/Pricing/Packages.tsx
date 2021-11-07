import { PricingData } from '@components/Pricing/PricingTypes';
import SectionTitle from '@components/Shared/SectionTitle';
import React from 'react';
import PricingCard from './PricingCard';

interface PricingProps {
  pricingData: Array<PricingData>;
}

const Packages = ({ pricingData }: PricingProps): JSX.Element => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="sm:flex sm:flex-col sm:align-center">
            <SectionTitle
              feature="Packages"
              title="Packages Offered by Spacejoy"
              description="Pick from one of our three online interior design packages, custom-made keeping your budget, style and interior design needs in mind"
            />
          </div>
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 lg:grid-cols-3">
            {pricingData.map((pricingItem) => {
              return <PricingCard pricingItem={pricingItem} key={pricingItem?.name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
