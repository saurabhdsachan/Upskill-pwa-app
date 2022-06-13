import { PlayIcon } from '@heroicons/react/solid';

const RecordingCard = ({ data, cb }) => {
  return (
    <div className="text-left p-4 flex shadow-xs border border-slate-200 rounded-xl mb-4 justify-center items-center">
      <div className="flex-1">
        <p>{data?.name}</p>
      </div>
      <div>
        <button
          onClick={cb}
          className="text-center items-center justify-center h-8 w-8 border border-transparent rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-blue-400 shadow-sm shadow-blue-500/50"
        >
          <PlayIcon className="w-7 h-7 inline" />
        </button>
      </div>
    </div>
  );
};

export default RecordingCard;
