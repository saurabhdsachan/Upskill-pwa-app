import dayjs from 'dayjs';
import React from 'react';

const PlanSlotCard = ({ data }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl p-4 mb-6">
      <p>{dayjs(data).format("D MMM 'YY")}</p>
    </div>
  );
};

export default PlanSlotCard;
