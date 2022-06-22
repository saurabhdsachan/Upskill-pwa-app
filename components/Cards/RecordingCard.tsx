import Button from '@components/Shared/Button/Button';
import { PlayIcon } from '@heroicons/react/solid';

const RecordingCard = ({ data, cb, active }) => {
  return (
    <div className="text-left p-4 flex shadow-xs border border-slate-200 rounded-xl mb-4 justify-center items-center">
      <div className="flex-1">
        <p className={active && 'text-red-600'}>{data?.name}</p>
      </div>
      <div>
        <Button onClick={cb} className="h-8 w-8" bg={active ? 'red' : 'blue'}>
          <PlayIcon className="w-7 h-7 inline" aria-hidden="true" />
          <span className="sr-only">Play Session</span>
        </Button>
      </div>
    </div>
  );
};

export default RecordingCard;
