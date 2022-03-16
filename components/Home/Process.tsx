import SectionTitle from '@components/Shared/SectionTitle';
import Image from 'next/image';
import React from 'react';

const Process: React.FC = () => {
  return (
    <div className="bg-white">
      <SectionTitle
        feature="Process"
        title="How Spacejoy works"
        description="Our design experts will transform any room in your home on our smart 3D desktop App. Shop handpicked products within your budget and style, directly from your room design, within Spacejoy."
      />

      <div className="relative container mx-auto px-4">
        <div className="flex space-x-10 max-w-7xl mx-auto">
          <div className="flex-1 py-14">
            <div className="text-center">
              <Image
                src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/v1625204341/spj-v2/process/upload-floor-plan_v4jnzx"
                height="135"
                width="239"
                alt="Tell us what you like"
                layout="intrinsic"
              />
            </div>
            <h3 className="text-lg my-4 text-gray-900">1. Tell us what you like</h3>
            <p className="text-gray-600">
              Go through our onboarding questionnaire and let us know what interior style suits you.
            </p>
          </div>
          <div className="flex-1 py-14">
            <div className="text-center">
              <Image
                src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/v1625204341/spj-v2/process/interior-subscription_jskxct"
                height="135"
                width="239"
                alt="Tell us what you like"
                layout="intrinsic"
              />
            </div>
            <h3 className="text-lg my-4 text-gray-900">2. Upload your floor plan</h3>
            <p className="text-gray-600">
              Based on your floor plan, we generate a 3D model of your apartment and generate realistic renderings.
            </p>
          </div>
          <div className="flex-1 py-14">
            <div className="text-center">
              <Image
                src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/v1625204341/spj-v2/process/tell-what-you-like_hzb7qb"
                height="135"
                width="239"
                alt="Tell us what you like"
                layout="intrinsic"
              />
            </div>
            <h3 className="text-lg my-4 text-gray-900">3. Interiors as a subscription</h3>
            <p className="text-gray-600">
              Happy with our proposal? Lay back and relax! We’ll ship the furniture and assemble it for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
