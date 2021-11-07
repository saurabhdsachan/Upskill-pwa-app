import SectionTitle from '@components/Shared/SectionTitle';
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
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
  &.entry {
    opacity: 1;
    & > div {
      opacity: 0;
      animation: ${entry} 0.8s forwards;
      transform: translateY(50px);
      &:nth-child(2) {
        animation-delay: 150ms;
      }
      &:nth-child(3) {
        animation-delay: 200ms;
      }
      &:nth-child(4) {
        animation-delay: 350ms;
      }
      &:nth-child(5) {
        animation-delay: 400ms;
      }
    }
  }
`;

const Advantage: React.FC = () => {
  return (
    <div>
      <SectionTitle
        feature="Advantages"
        title="Design + Shopping + Spacejoy = 😍"
        description="Our design experts will transform any room in your home on our smart 3D desktop App. Shop handpicked products within your budget and style, directly from your room design, within Spacejoy."
      />
      <div className="container px-4 mx-auto">
        <Controller>
          <Scene classToggle="entry" triggerHook={0.9} indicators={false} reverse={true}>
            <AnimateBox className="grid md:gap-5 xl:gap-8 grid-cols-6 items-center">
              <div className="bg-gray-100 p-10 h-full rounded-xl col-start-1 col-end-3">
                <div>
                  <p>Try Before you buy</p>
                  <h3 className="text-2xl mt-3">Virtually try all the expensive products before making it final</h3>
                </div>
              </div>
              <div className="bg-gray-100 p-10 h-full rounded-xl col-start-3 col-end-5">
                <div>
                  <p>Try Before you buy</p>
                  <h3 className="text-2xl mt-3">Virtually try all the expensive products before making it final</h3>
                </div>
              </div>
              <div className="bg-gray-100 p-10 h-full rounded-xl col-start-5 col-end-7">
                <div>
                  <p>Try Before you buy</p>
                  <h3 className="text-2xl mt-3">Virtually try all the expensive products before making it final</h3>
                </div>
              </div>
              <div className="bg-gray-100 p-10 h-full rounded-xl col-start-1 col-end-4">
                <div>
                  <p>Try Before you buy</p>
                  <h3 className="text-2xl mt-3">Virtually try all the expensive products before making it final</h3>
                </div>
              </div>
              <div className="bg-gray-100 p-10 h-full rounded-xl col-start-4 col-end-7">
                <div>
                  <p>Try Before you buy</p>
                  <h3 className="text-2xl mt-3">Virtually try all the expensive products before making it final</h3>
                </div>
              </div>
            </AnimateBox>
          </Scene>
        </Controller>
      </div>
    </div>
  );
};

export default Advantage;
