import SectionTitle from '@components/Shared/SectionTitle';
import Image from 'next/image';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const entry = keyframes`
	from { 
		opacity: 0;
	}
	to {
    opacity: 1;
    transform: translateY(0px);
	}
`;

const AnimateBox = styled.div`
  opacity: 0;
  animation: ${entry} 0.8s forwards;
  transform: translateY(20px);
  &.details {
    animation-delay: 550ms;
  }
  &.banner {
    animation-delay: 300ms;
  }
`;

const MindBlowing: React.FC = () => {
  return (
    <div className="relative">
      <svg
        className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
      </svg>
      <SectionTitle
        title="We are Awesome!"
        description="Pick from one of our three online interior design packages, custom-made keeping your budget, style and interior design needs in mind"
      />
      <div className="flex">
        <div className="relative">
          <AnimateBox className="banner overflow-hidden">
            <div className=" filter blur-sm bg-gray-100">
              <Image
                className="object-cover"
                src="/images/spj-happy-customer_ahkoxm.jpg"
                alt="spacejoy happy customer"
                width={'1000'}
                height={'666'}
                layout="intrinsic"
              />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <Image
                src="https://res.cloudinary.com/spacejoy/image/upload/v1622344281/spj-v2/spj-living-room_x9d25x.jpg"
                alt="spacejoy awesome look"
                width={'1000'}
                height={'666'}
                layout="responsive"
              />
            </div>
          </AnimateBox>
          <div className="absolute -top-12 w-16 h-24 bg-yellow-300" />
        </div>
        <div className="relative h-full px-12 max-w-lg justify-center self-center">
          <div>
            <p className="text-sm text-gray-600 leading-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum veniam voluptates consequatur ea quae
              vitae impedit sunt labore magnam id cumque, maxime ducimus nobis. Cum quas repellendus animi excepturi
              minima? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="mt-4 font-semibold">- Team Spacejoy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindBlowing;
