import Button from '@components/Shared/Button/Button';
import { useDataBusStore } from '@context/dataBusContext';
import { ChatAltIcon, UserGroupIcon } from '@heroicons/react/solid';
import React from 'react';

const HeroAction = () => {
  const { updateDownloadAppBottomSheetState } = useDataBusStore();

  return (
    <div className="flex space-x-4">
      <div className="flex-1">
        <Button onClick={() => updateDownloadAppBottomSheetState(true)} bg="blue" size="big">
          <UserGroupIcon className="h-4 w-4 mr-2" aria-hidden="true" /> Follow
        </Button>
      </div>
      <div className="flex-1">
        <Button onClick={() => updateDownloadAppBottomSheetState(true)} size="big">
          <ChatAltIcon className="h-4 w-4 mr-2" aria-hidden="true" /> Chat
        </Button>
      </div>
    </div>
  );
};

export default React.memo(HeroAction);
