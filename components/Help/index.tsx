import SectionTitle from '@components/Shared/SectionTitle';
import { Tab } from '@headlessui/react';
import HelpData from '@mocks/HelpData';
import React, { useState } from 'react';
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Index = () => {
  let [categories] = useState({
    DIY: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Pro: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    'E-commerce': [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle feature="help" title="Frequently asked questions" />
        <Tab.Group>
          <div className="text-center">
            <Tab.List className="inline-flex p-1 space-x-1 rounded-xl border border-gray-300">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-32 py-2 text-sm leading-5 bg-white rounded-lg',
                      selected ? 'bg-gray-900 text-white shadow' : 'text-gray-900  hover:bg-gray-200'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="mt-8 pb-8">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel key={idx}>
                <AnimateBox className="divide-y-2 divide-gray-200">
                  <dl className="grid grid-cols-3 gap-8">
                    {HelpData?.map((item, index) => (
                      <div key={item.question} className="bg-white p-4 xl:p-6 rounded">
                        <dt className="text-lg font-bold text-gray-700">{item.question}</dt>
                        <dd className="antialiased mt-2 text-gray-500">{item.answer}</dd>
                      </div>
                    ))}
                  </dl>
                </AnimateBox>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Index;
