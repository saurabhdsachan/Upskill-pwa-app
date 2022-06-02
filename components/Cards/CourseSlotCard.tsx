import SelectionTick from '@components/Shared/SelectionTick';
import { classNames } from '@utils/helpers';
import dayjs from 'dayjs';
import React from 'react';

const CourseSlotCard = ({ data, onClick, isSelected }) => {
  return (
    <div
      className={classNames(
        isSelected ? 'border-blue-600 text-blue-600' : 'border-slate-200',
        ' border bg-white rounded-xl mb-6 shadow'
      )}
      role="button"
      aria-label="slot select"
      onClick={onClick}
    >
      <div className="p-4 border-b border-dashed">
        <div className="flex items-center">
          <div className="flex-1">
            <p>
              {dayjs(data?.startTime).format('D MMM')} - {dayjs(data?.endTime).format("D MMM 'YY")}
            </p>
          </div>
          <SelectionTick isSelected={isSelected} />
        </div>
      </div>
      <div className="px-4 pt-4 pb-2">
        <table className="border-collapse table-auto w-full text-sm">
          <thead>
            <tr>
              <th className="font-normal text-left border-b border-slate-100 py-2">#</th>
              <th className="font-normal text-left border-b border-slate-100 py-2">Date</th>
              <th className="font-normal text-left border-b border-slate-100 py-2">Start Time</th>
              <th className="font-normal text-right border-b border-slate-100 py-2">Duration</th>
            </tr>
          </thead>
          <tbody>
            {data?.episodeInstances?.map((item, index) => (
              <tr key={`episode-${item?.episodeId}`}>
                <td
                  className={classNames(
                    data?.episodeInstances?.length - 1 === index ? '' : 'border-b border-slate-100 ',
                    'px-1 py-2 text-slate-600'
                  )}
                >
                  {index + 1}
                </td>
                <td
                  className={classNames(
                    data?.episodeInstances?.length - 1 === index ? '' : 'border-b border-slate-100 ',
                    'px-1 py-2 text-slate-600'
                  )}
                >
                  {dayjs(item?.startTime).format('D MMM')}
                </td>
                <td
                  className={classNames(
                    data?.episodeInstances?.length - 1 === index ? '' : 'border-b border-slate-100 ',
                    'px-1 py-2 text-slate-600'
                  )}
                >
                  {dayjs(item?.startTime).format('hh:mm a')}
                </td>
                <td
                  className={classNames(
                    data?.episodeInstances?.length - 1 === index ? '' : 'border-b border-slate-100 ',
                    'px-1 py-2 text-slate-600 text-right'
                  )}
                >
                  {(item?.endTime - item?.startTime) / (1000 * 60)} mins
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseSlotCard;
