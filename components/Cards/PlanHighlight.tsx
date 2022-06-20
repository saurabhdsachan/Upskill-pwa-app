import { CheckIcon } from '@heroicons/react/solid';
import { tsConvert, weekShortName } from '@utils/helpers';
import React from 'react';

interface IPlanHighlight {
  pax: number;
  numSessions: number;
  startTime: number;
  duration: number;
  days: string[];
}

const PlanHighlight: React.FC<IPlanHighlight> = ({ pax, numSessions, startTime, duration, days }) => {
  return (
    <div className="bg-slate-100 rounded-b-xl -mt-2 pt-3 pb-3 text-xs pr-4 pl-2 text-slate-500 border border-slate-200">
      <ul role="list">
        <li className="mt-1 capitalize">
          <div className="flex space-x-1">
            <div>
              <CheckIcon className="w-3 h-3 inline text-green-600" aria-hidden="true" />
            </div>
            <div className="flex-1">
              {pax === 1 ? '1:1 session' : 'Group Session'} | {pax} audience size
            </div>
          </div>
        </li>
        <li className="mt-1 capitalize">
          <div className="flex space-x-1">
            <div>
              <CheckIcon className="w-3 h-3 inline text-green-600" aria-hidden="true" />
            </div>
            <div className="flex-1">{numSessions} sessions</div>
          </div>
        </li>
        <li className="mt-1 ">
          <div className="flex space-x-1">
            <div>
              <CheckIcon className="w-3 h-3 inline text-green-600" aria-hidden="true" />
            </div>
            <div className="flex-1">
              Time: {tsConvert(startTime)}
              <br />({duration} min)
            </div>
          </div>
        </li>
        <li className="mt-1 capitalize h-10">
          <div className="flex space-x-1">
            <div>
              <CheckIcon className="w-3 h-3 inline text-green-600" aria-hidden="true" />
            </div>
            <div className="flex-1">{weekShortName(days).join(', ')}</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PlanHighlight;
