import SectionTitle from '@components/Shared/SectionTitle';
import { Disclosure, Tab } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
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
    <div className="bg-white">
      <div className="relative container mx-auto px-4 z-10">
        <SectionTitle feature="help" title="Frequently asked questions" />
        <Tab.Group>
          <div className="text-center relative z-10 -mb-6">
            <Tab.List className="inline-flex p-1 space-x-1 rounded-xl border border-gray-400 shadow-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur firefox:bg-opacity-90">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-32 py-2 text-sm leading-5 bg-white rounded-lg',
                      selected ? 'bg-gray-900 text-white' : 'text-gray-900 bg-gray-100 hover:bg-gray-300'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="pb-8">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel key={idx}>
                <AnimateBox>
                  <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                      {HelpData.map((faq) => (
                        <Disclosure as="div" key={faq.question} className="pt-6">
                          {({ open }) => (
                            <>
                              <dt className="text-lg">
                                <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                  <span className={`${open ? 'font-bold' : 'font-medium'} text-gray-900`}>
                                    {faq.question}
                                  </span>
                                  <span className="ml-6 h-7 flex items-center">
                                    <ChevronDownIcon
                                      className={classNames(
                                        open ? '-rotate-180' : 'rotate-0',
                                        'h-4 w-4 transform transition-transform'
                                      )}
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Disclosure.Button>
                              </dt>
                              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                <p className="text-base text-gray-700">{faq.answer}</p>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </dl>
                  </div>
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
