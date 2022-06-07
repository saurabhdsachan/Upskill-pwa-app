import { useDataBusStore } from '@context/dataBusContext';
import { ChatAltIcon, UserGroupIcon } from '@heroicons/react/solid';
import React from 'react';

const HeroAction = () => {
  const { updateBottomSheetState } = useDataBusStore();

  return (
    <div className="flex space-x-4">
      <div className="flex-1">
        <button
          onClick={() => updateBottomSheetState(true)}
          className="inline-flex items-center justify-center w-full py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-blue-400 shadow-sm shadow-blue-500/50"
        >
          <UserGroupIcon className="h-4 w-4 mr-2" /> Follow
        </button>
      </div>
      <div className="flex-1">
        <button
          onClick={() => updateBottomSheetState(true)}
          className="inline-flex items-center justify-center w-full py-3 border border-slate-400 rounded-xl text-sm font-medium text-slate-900 bg-white-600 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-400 shadow-sm shadow-white-500/50"
        >
          <ChatAltIcon className="h-4 w-4 mr-2" /> Chat
        </button>
      </div>
    </div>
  );
};

export default HeroAction;
