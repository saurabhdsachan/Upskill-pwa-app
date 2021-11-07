import Modal from '@components/Shared/Modal';
import React from 'react';

const ListFilter: React.FC = () => {
  return (
    <section className="interior-design-section sticky top-0 z-10 bg-white">
      <div className="container mx-auto px-4 pt-20 pb-6">
        <div className="flex items-end">
          <div className="flex-1">
            <p className="text-gray-500">10,000+ Designs</p>
            <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900">Interior Design Ideas</h2>
          </div>
          <div className="text-right flex-1">
            <Modal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ListFilter);
