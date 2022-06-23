import RecordingCard from '@components/Cards/RecordingCard';
import { useDataBusStore } from '@context/dataBusContext';
import { Tab } from '@headlessui/react';
import { blurredBgImage } from '@public/images/bg-base-64';
import { classNames, getImageUrl } from '@utils/helpers';
import dayjs from 'dayjs';
import { observer } from 'mobx-react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { BottomSheet } from 'react-spring-bottom-sheet';
import VideoPlayer from './VideoPlayer';

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

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    // player.on('waiting', () => {
    //   console.log('player is waiting');
    // });

    // player.on('dispose', () => {
    //   console.log('player will dispose');
    // });
  };

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
        header={
          <>
            <h3 className="text-lg">Recording List</h3>
            <small className="text-slate-400 mb-6 text-xs">
              Total recordings : {dataBus?.sessionRecordingList?.recordings?.length}
            </small>
          </>
        }
      >
        <div className="container mx-auto">
          {playerUrl && (
            <div className="px-4 pt-2">
              <VideoPlayer
                options={{
                  autoplay: true,
                  controls: true,
                  responsive: true,
                  fluid: true,
                  sources: [
                    {
                      src: playerUrl,
                      type: 'video/mp4',
                    },
                  ],
                }}
                onReady={handlePlayerReady}
              />
            </div>
          )}
          <div ref={playerRef} />
          <If condition={dataBus?.sessionRecordingList?.hasOwnProperty('recordings')}>
            <Then>
              <div className="p-4 text-center">
                {dataBus?.sessionRecordingList?.recordings?.map((record) => (
                  <RecordingCard
                    key={record?.name}
                    data={record}
                    active={record?.url === playerUrl}
                    cb={() => setPlayerUrl(record?.url)}
                  />
                ))}
              </div>
            </Then>
            <Else>
              <Tab.Group>
                <Tab.List>
                  <div className="overflow-auto">
                    <div className="overflow-x-auto flex no-scrollbar">
                      {dataBus?.sessionRecordingList?.list?.map((item, index) => (
                        <Tab
                          key={item?.title}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-blue-500' : 'border-slate-100 text-slate-400',
                              'px-4 py-3 flex-1 border-b-2 text-xs bg-white whitespace-nowrap focus:outline-none'
                            )
                          }
                        >
                          {item?.title}
                        </Tab>
                      ))}
                    </div>
                  </div>
                </Tab.List>

                <Tab.Panels>
                  {dataBus?.sessionRecordingList?.list?.map((item) => (
                    <Tab.Panel key={`${item?.title}-panel`} className="min-h-free p-4">
                      <div className="flex space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-xl shadow relative aspect-1 overflow-hidden">
                          <Image
                            className={classNames('rounded-xl object-cover')}
                            src={
                              item?.coverImageUrl
                                ? getImageUrl(item?.coverImageUrl, { height: 80, width: 80 })
                                : blurredBgImage
                            }
                            alt={item?.title}
                            height={40}
                            width={40}
                            placeholder="blur"
                            layout="responsive"
                            blurDataURL={blurredBgImage}
                          />
                        </div>
                        <div>
                          <h3 className="text-base">{item?.title}</h3>
                          <small className="text-slate-400 text-xs">
                            {dayjs(item?.startTime).format("D MMM 'YY (ddd)")}
                          </small>
                        </div>
                      </div>
                      {item?.recording?.recordings?.map((record) => (
                        <RecordingCard
                          key={record?.name}
                          data={record}
                          active={record?.url === playerUrl}
                          cb={() => setPlayerUrl(record?.url)}
                        />
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </Else>
          </If>
        </div>
      </BottomSheet>
      <BottomSheet
        onDismiss={() => updateShowLanguageBottomSheetState(false)}
        snapPoints={({ maxHeight }) => [maxHeight / 1.5]}
        open={dataBus?.isShowLanguageBottomSheetOpen}
        header={<h3 className="text-lg my-2">Language</h3>}
      >
        <div className="container mx-auto">
          <div className="p-6 text-center">
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
