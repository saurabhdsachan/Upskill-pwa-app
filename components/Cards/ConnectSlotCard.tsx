import SelectionTick from '@components/Shared/SelectionTick';
import { UnsplashData } from '@mocks/Unsplash';
import React from 'react';

const ConnectSlotCard = ({ data, onClick }) => {
  console.log('first', data);

  return (
    <>
      <div className="px-6">
        <h2 className="text-xl">Select a date</h2>
      </div>
      <div className="relative overflow-auto my-2">
        <div className="overflow-x-auto flex no-scrollbar">
          {data.map((item) => (
            <div className="flex-none px-2 py-1 first:pl-6 last:pr-6" key={item.label}>
              <button className="text-left rounded-xl border border-slate-200 bg-white p-4 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-400">
                <SelectionTick isSelected={true} />
                <h4 className="leading-4 font-bold mt-3">{item?.date}</h4>
                <small className="text-xs text-slate-600">{item?.subLabel}</small>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6">
        <p className="text-sm">Afternoon</p>
      </div>
      <div className="relative overflow-auto my-2">
        <div className="overflow-x-auto flex no-scrollbar">
          {UnsplashData.map((item) => (
            <div className="flex-none p-1 first:pl-6 last:pr-6" key={item.imageThumbnail}>
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-400">
                <p className="text-sm text-slate-600">12:15 PM</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ConnectSlotCard;
