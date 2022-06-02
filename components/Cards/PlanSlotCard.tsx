import dayjs from 'dayjs';
import React from 'react';

const PlanSlotCard = ({ data, onClick }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl p-4 mb-6" role="button" aria-label="slot select" onClick={onClick}>
      {dayjs(data).format("D MMM 'YY")}
    </div>
  );
};

export default PlanSlotCard;
