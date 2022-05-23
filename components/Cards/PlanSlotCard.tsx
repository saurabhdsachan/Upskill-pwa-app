import { ClockIcon } from '@heroicons/react/solid';
import dayjs from 'dayjs';
import React from 'react';

const PlanSlotCard = ({ data }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl p-4 mb-6">
      <div className="flex">
        <div className="flex-1">
          <small className="text-xs text-slate-400">Date</small>
          <p>{dayjs(data?.startTime).format("D MMM 'YY (ddd)")}</p>
          <hr className="mt-3 mb-2 h-0.5 border-b border-dashed" />
        </div>
        <div className="w-14 text-right">
          <button className="h-6 w-6 rounded-full border border-slate-400 bg-blue-500" />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <small className="text-xs text-slate-400">Start Time</small>
          <p>{dayjs(data?.startTime).format("D MMM 'YY")}</p>
        </div>
        <div className="text-right">
          <small className="text-xs text-slate-400">Duration</small>
          <p>
            <ClockIcon className="w-4 h-4 inline text-slate-400" /> {(data?.endTime - data?.startTime) / (1000 * 60)}{' '}
            mins
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanSlotCard;
