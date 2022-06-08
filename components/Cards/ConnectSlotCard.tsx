import SelectionTick from '@components/Shared/SelectionTick';
import { useSlotsStore } from '@context/slotContext';
import { DEMO } from '@utils/constants';
import { classNames } from '@utils/helpers';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';

const ConnectSlotCard = observer(({ data, sessionType }) => {
  console.log('data', data);
  const isDemo = sessionType === DEMO;
  const { slots, setConnectSlots, setDemoSlots } = useSlotsStore();
  const [selectedDate, setSelectedDate] = useState(
    (isDemo ? slots?.demo?.date : slots?.connect?.date) || data[0]?.date || ''
  );

  useEffect(() => {
    isDemo ? setDemoSlots({ date: selectedDate }) : setConnectSlots({ date: selectedDate });
  }, [isDemo, selectedDate, setConnectSlots, setDemoSlots]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    isDemo ? setDemoSlots({ date }) : setConnectSlots({ date });
  };

  const handleTimeSelect = ({ startTime, endTime }) => {
    isDemo
      ? setDemoSlots({ date: selectedDate, startTime, endTime })
      : setConnectSlots({ date: selectedDate, startTime, endTime });
  };

  return (
    <>
      <div className="px-6">
        <h2 className="text-xl">Select a date</h2>
      </div>
      <div className="relative overflow-auto my-2">
        <div className="overflow-x-auto flex no-scrollbar">
          {data.map((item) => {
            const isSelected = selectedDate === item?.date;

            return (
              <div className="flex-none p-1 first:pl-6 last:pr-6" key={item.label}>
                <div
                  role="button"
                  aria-label="slot date select"
                  onClick={() => handleDateSelect(item?.date)}
                  className={classNames(
                    isSelected
                      ? 'border-blue-600 text-blue-600 focus:ring-blue-400'
                      : 'border-slate-200 focus:ring-slate-400',
                    ' text-left rounded-xl border bg-white p-4 focus:outline-none focus:ring-1 focus:ring-offset-2 '
                  )}
                >
                  <SelectionTick isSelected={isSelected} />
                  <h4 className="leading-4 font-bold mt-3">{item?.date}</h4>
                  <small className="text-xs text-slate-600">{item?.subLabel}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {data
        .filter((item) => item?.date === selectedDate)[0]
        ?.groupedSlots?.map((item) => (
          <div key={item?.label}>
            <div className="px-6">
              <p className="text-sm">{item?.label}</p>
            </div>
            <div className="relative overflow-auto my-2">
              <div className="overflow-x-auto flex no-scrollbar">
                {item?.slots?.map((slot) => (
                  <div className="flex-none p-1 first:pl-6 last:pr-6" key={slot?.unixEndTime}>
                    <button
                      disabled={!slot?.available}
                      onClick={() => handleTimeSelect({ startTime: slot?.unixStartTime, endTime: slot?.unixEndTime })}
                      className={classNames(
                        slots?.connect?.startTime === slot?.unixStartTime ||
                          slots?.demo?.startTime === slot?.unixStartTime
                          ? 'border-blue-600 text-blue-600 focus:ring-blue-400'
                          : 'border-slate-200 text-slate-600  focus:ring-slate-400',
                        ' rounded-xl bg-white border px-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-offset-2'
                      )}
                    >
                      <p className="text-sm">{slot?.startTime}</p>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </>
  );
});

export default ConnectSlotCard;
