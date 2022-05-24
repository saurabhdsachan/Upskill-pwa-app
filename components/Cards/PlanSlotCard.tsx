import { useSlotsStore } from '@context/slotContext';
import dayjs from 'dayjs';
import React from 'react';

const PlanSlotCard = ({ data }) => {
  const slotsStore = useSlotsStore();
  const handleClick = () => {
    slotsStore.addSlot({
      creatorId: 123,
      SessionId: 456,
      startTime: data,
    });
  };

  return (
    <div>
      <button className="bg-white shadow-sm rounded-xl p-4 mb-6" onClick={handleClick}>
        {dayjs(data).format("D MMM 'YY")}
      </button>
    </div>
  );
};

export default PlanSlotCard;
