import HelpData from '@mocks/HelpData';
import Image from 'next/image';
import React from 'react';
import AccordionItem from './AccordionItem';

const Ecommerce: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-28">
      <div className="max-w-3xl mx-auto">
        <Image
          className="object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=1200&q=80"
          height="300"
          width="800"
          alt="e-commerce help"
          layout="responsive"
        />
      </div>
      <div className="bg-gray-50 -mt-36 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <dl className="mt-6 space-y-6 divide-y divide-gray-300">
              {HelpData?.map((item, index) => (
                <AccordionItem key={item.question} data={item} index={index} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
