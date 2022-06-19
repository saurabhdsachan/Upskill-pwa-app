import RecordingCard from '@components/Cards/RecordingCard';
import { useDataBusStore } from '@context/dataBusContext';
import { observer } from 'mobx-react';
import React, { useRef, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

const Footer: React.FC = observer(() => {
  const {
    dataBus,
    updateDownloadAppBottomSheetState,
    updateShowRecordingBottomSheetState,
    updateShowLanguageBottomSheetState,
    updateSessionRecordingList,
  } = useDataBusStore();
  const playerRef = useRef();
  const [playerUrl, setPlayerUrl] = useState('');

  return (
    <>
      <BottomSheet
        onDismiss={() => updateDownloadAppBottomSheetState(false)}
        snapPoints={({ maxHeight }) => [maxHeight / 3]}
        open={dataBus?.isDownloadAppBottomSheetOpen}
      >
        <div className="container mx-auto">
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
        onDismiss={() => {
          setPlayerUrl('');
          updateSessionRecordingList(null);
          updateShowRecordingBottomSheetState(false);
        }}
        snapPoints={({ maxHeight }) => [maxHeight / 1.2]}
        open={dataBus?.isShowRecordingBottomSheetOpen}
      >
        <div className="container mx-auto">
          <div className="p-6 text-center">
            <h3 className="text-lg">Recording List</h3>
            <small className="text-slate-400 mb-6 text-xs">
              Total recordings : {dataBus?.sessionRecordingList?.recordings?.length}
            </small>
            {playerUrl && (
              <video
                className="rounded-2xl mt-6 mx-auto"
                preload="metadata"
                muted
                loop
                controls
                autoPlay
                width={500}
                height={250}
              >
                <source src={playerUrl} type="video/mp4" />
              </video>
            )}
            <div ref={playerRef} />

            <div className="mt-6">
              {dataBus?.sessionRecordingList?.recordings?.map((record) => (
                <RecordingCard key={record?.name} data={record} cb={() => setPlayerUrl(record?.url)} />
              ))}
            </div>
          </div>
        </div>
      </BottomSheet>
      <BottomSheet
        onDismiss={() => updateShowLanguageBottomSheetState(false)}
        snapPoints={({ maxHeight }) => [maxHeight / 2]}
        open={dataBus?.isShowLanguageBottomSheetOpen}
      >
        <div className="container mx-auto">
          <div className="p-6 text-center">
            <h3 className="text-lg mb-6">Language</h3>
            <div className="prose prose-sm capitalize text-left">
              <ul role="list">
                {dataBus?.userLanguageList?.map((item) => (
                  <li key={item}>
                    <span>{item.toLowerCase()}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </BottomSheet>
    </>
  );
});

export default React.memo(Footer);
