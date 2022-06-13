import RecordingCard from '@components/Cards/RecordingCard';
import { useDataBusStore } from '@context/dataBusContext';
import { observer } from 'mobx-react';
import React from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

const Footer: React.FC = observer(() => {
  const { dataBus, updateDownloadAppBottomSheetState, updateShowRecordingBottomSheetState } = useDataBusStore();

  return (
    <>
      <BottomSheet
        onDismiss={() => updateDownloadAppBottomSheetState(false)}
        snapPoints={({ maxHeight }) => [maxHeight / 3]}
        open={dataBus?.isDownloadAppBottomSheetOpen}
      >
        <div className="container">
          <div className="p-6 text-center">
            <h3 className="text-lg mb-6">Download the app</h3>
            <p className="text-slate-600 mb-6">
              The feature isn&apos;t available <br /> on browser yet
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=pep.live"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-blue-400 shadow-sm shadow-blue-500/50"
            >
              Download Pep App Now
            </a>
          </div>
        </div>
      </BottomSheet>
      <BottomSheet
        onDismiss={() => updateShowRecordingBottomSheetState(false)}
        snapPoints={({ maxHeight }) => [maxHeight / 1.2]}
        open={dataBus?.isShowRecordingBottomSheetOpen}
      >
        <div className="container">
          <div className="p-6 text-center">
            <h3 className="text-lg">Recording List</h3>
            <small className="text-slate-400 mb-6 text-xs">
              Total recordings : {dataBus?.sessionRecordingList?.recordings?.length}
            </small>
            <div className="mt-6">
              {dataBus?.sessionRecordingList?.recordings?.map((record) => (
                <RecordingCard key={record?.name} data={record} />
              ))}
            </div>
          </div>
        </div>
      </BottomSheet>
    </>
  );
});

export default React.memo(Footer);
