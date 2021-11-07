import SectionTitle from '@components/Shared/SectionTitle';
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
  div {
    opacity: 0;
    animation: ${entry} 0.8s forwards;
    transform: translateY(20px);
  }
  div:nth-child(1) {
    animation-delay: 150ms;
  }
  div:nth-child(2) {
    animation-delay: 250ms;
  }
  div:nth-child(3) {
    animation-delay: 350ms;
  }
  div:nth-child(4) {
    animation-delay: 450ms;
  }
  div:nth-child(5) {
    animation-delay: 550ms;
  }
  div:nth-child(6) {
    animation-delay: 650ms;
  }
`;

const design = (): JSX.Element => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle feature="help" title="Frequently asked questions" />
      <AnimateBox className="divide-y-2 divide-gray-200">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
          <div>
            <dt className="text-lg leading-6 font-medium text-gray-900">
              What&#039;s the best thing about Switzerland?
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quas cupiditate laboriosam fugiat.
            </dd>
          </div>
          <div>
            <dt className="text-lg leading-6 font-medium text-gray-900">
              What&#039;s the best thing about Switzerland?
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quas cupiditate laboriosam fugiat.
            </dd>
          </div>
          <div>
            <dt className="text-lg leading-6 font-medium text-gray-900">
              What&#039;s the best thing about Switzerland?
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quas cupiditate laboriosam fugiat.
            </dd>
          </div>
          <div>
            <dt className="text-lg leading-6 font-medium text-gray-900">
              What&#039;s the best thing about Switzerland?
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quas cupiditate laboriosam fugiat.
            </dd>
          </div>
          <div>
            <dt className="text-lg leading-6 font-medium text-gray-900">
              What&#039;s the best thing about Switzerland?
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quas cupiditate laboriosam fugiat.
            </dd>
          </div>
          <div>
            <dt className="text-lg leading-6 font-medium text-gray-900">
              What&#039;s the best thing about Switzerland?
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quas cupiditate laboriosam fugiat.
            </dd>
          </div>
        </dl>
      </AnimateBox>
    </div>
  );
};

export default design;
