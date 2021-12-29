import { ChevronDownIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';

interface AccordionItemInterface {
  data: {
    question: string;
    answer: string;
    tag: string;
  };
  index: number;
}

const AccordionItem: React.FC<AccordionItemInterface> = ({ data, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${index !== 0 ? 'pt-6' : 'pt-0'}`}>
      <dt className="text-lg">
        <button
          type="button"
          className="focus:outline-none text-left w-full flex justify-between items-start text-gray-400"
          aria-controls="faq-0"
          aria-expanded="false"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <span className="font-medium text-gray-900">{data?.question}</span>
          <span className="ml-6 h-7 flex items-center">
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </span>
        </button>
      </dt>
      <dd className={`mt-2 pr-12 ${isOpen ? 'block' : 'hidden'}`} id="faq-0">
        <p className="text-gray-500">{data?.answer}</p>
      </dd>
    </div>
  );
};

export default React.memo(AccordionItem);
