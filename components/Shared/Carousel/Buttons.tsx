import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import styled, { keyframes } from 'styled-components';

const entry = keyframes`
	from { 
		opacity: 0;
    transform: scale(0);
	}
	to {
    opacity: 1;
    transform: scale(1);
	}
`;

const AnimateBox = styled.div`
  opacity: 0;
  &.entry {
    opacity: 1;
    & > button {
      opacity: 0;
      transform: scale(0);
      animation: ${entry} 0.4s forwards;
      /* animation-delay: 100ms; */
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
`;

interface CarouselNavButton {
  onClick: () => void;
  flow: string;
}

const CarouselNavButton: React.FC<CarouselNavButton> = ({ onClick, flow }) => {
  return (
    <Controller>
      <Scene classToggle="entry" triggerHook={1} indicators={false} reverse={false}>
        <AnimateBox className={`${flow === 'left' ? 'justify-self-end' : 'justify-self-start'}`}>
          <button
            className="relative z-10 lg:h-28 lg:w-28 h-20 w-20 bg-white shadow-lg border border-bg-50 transition hover:shadow-sm rounded-2xl flex items-center justify-center hover:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none rounded-md px-1"
            onClick={onClick}
            aria-label={flow}
          >
            {flow === 'left' && (
              <>
                <span className="sr-only">Left</span>
                <ArrowLeftIcon className="w-6 h-6" />
              </>
            )}
            {flow === 'right' && (
              <>
                <span className="sr-only">Right</span>
                <ArrowRightIcon className="w-6 h-6" />
              </>
            )}
          </button>
        </AnimateBox>
      </Scene>
    </Controller>
  );
};

export default React.memo(CarouselNavButton);
