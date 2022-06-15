import SelectionTick from '@components/Shared/SelectionTick';
import { CalendarIcon } from '@heroicons/react/outline';
import { classNames } from '@utils/helpers';
import dayjs from 'dayjs';

const PlanSlotCard = ({ data, onClick, isSelected }) => {
  return (
    <div
      className={classNames(
        isSelected ? 'border-blue-600 text-blue-600' : 'border-slate-200',
        ' flex items-center border bg-white shadow-sm rounded-xl p-4 mb-6'
      )}
      role="button"
      aria-label="slot select"
      onClick={onClick}
    >
      <div className="flex-1">
        <CalendarIcon className="h-4 w-4 mr-2 inline-block" aria-hidden="true" />
        {dayjs(data).format('D MMM (ddd)')}
      </div>
      <div>
        <SelectionTick isSelected={isSelected} />
      </div>
    </div>
  );
};

export default PlanSlotCard;
