import SelectionTick from '@components/Shared/SelectionTick';
import { ClockIcon } from '@heroicons/react/solid';
import { classNames } from '@utils/helpers';
import dayjs from 'dayjs';
import React from 'react';

const WorkshopSlotCard = ({ data, onClick, isSelected }) => {
  return (
    <div
      className={classNames(
        isSelected ? 'border-blue-600 text-blue-600' : 'border-slate-200',
        ' border bg-white shadow-sm rounded-xl p-4 mb-6'
      )}
      role="button"
      aria-label="slot select"
      onClick={onClick}
    >
      <div className="flex">
        <div className="flex-1">
          <small className="text-xs text-slate-400">Date</small>
          <p>{dayjs(data?.startTime).format("D MMM 'YY (ddd)")}</p>
          <hr className="mt-3 mb-2 h-0.5 border-b border-dashed" />
        </div>
        <div className="w-14 text-right">
          <SelectionTick isSelected={isSelected} />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <small className="text-xs text-slate-400">Start Time</small>
          <p className="text-slate-900">{dayjs(data?.startTime).format("D MMM 'YY")}</p>
        </div>
        <div className="text-right">
          <small className="text-xs text-slate-400">Duration</small>
          <p className="text-slate-900">
            <ClockIcon className="w-4 h-4 inline text-slate-400" /> {(data?.endTime - data?.startTime) / (1000 * 60)}{' '}
            mins
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopSlotCard;
