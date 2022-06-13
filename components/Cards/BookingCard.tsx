import Bullets from '@components/Shared/Bullets';
import Tags from '@components/Shared/Tags';
import { useDataBusStore } from '@context/dataBusContext';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import { blurredBgImage } from '@public/images/bg-base-64';
import { FEED_TYPE } from '@utils/constants';
import { classNames, formatPrice, getImageUrl } from '@utils/helpers';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { If, Then } from 'react-if';

dayjs.extend(relativeTime);

const BookingCard = ({ data: { booking }, type }) => {
  const [timeRemaining, setTimeRemaining] = useState(booking?.startTime - Date.now());

  const linkActive = timeRemaining / (1000 * 60) <= 10 && booking?.startTime - Date.now() > 0;

  const sessionActive = timeRemaining / (1000 * 60) <= 0 && booking?.endTime - Date.now() > 0;

  const sessionEnded = booking?.endTime < Date.now();

  const { updateDownloadAppBottomSheetState, updateSessionRecordingList, updateShowRecordingBottomSheetState } =
    useDataBusStore();

  const handleViewRecording = (data) => {
    updateSessionRecordingList(data);
    updateShowRecordingBottomSheetState(true);
  };

  const openSessionLink = () => {
    var a = document.createElement('a');
    a.target = '_self';
    a.href = `https://meet.pep.live/preview/room-id/user-group/${booking?.userSessionId}/${
      booking?.sessionType === 'PLAN' ? booking?.startTime : booking?.sessionNumber
    }`;
    a.click();

    return null;
  };

  const tagNames = () => {
    const tmp = [];
    booking?.chips?.map((chip) => tmp.push(chip?.chipName));

    return tmp;
  };

  useEffect(() => {
    let timeRemainingNew = 0;
    const timer = setInterval(() => {
      timeRemainingNew = booking?.startTime - Date.now();
      setTimeRemaining(timeRemainingNew);
    }, 60000);
    if (timeRemainingNew < 0) clearInterval(timer);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="mb-4 rounded-2xl bg-white border border-slate-300 shadow-xs">
      <div className="flex space-x-4 p-4">
        <div className="w-12 h-12 rounded-xl shadow relative aspect-1 overflow-hidden">
          <Image
            className={classNames('rounded-xl object-cover')}
            src={booking?.coverImgUrl ? getImageUrl(booking?.coverImgUrl, { height: 180, width: 180 }) : blurredBgImage}
            alt={'xy'}
            height={40}
            width={40}
            placeholder="blur"
            layout="responsive"
            blurDataURL={blurredBgImage}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-base capitalize">
            {booking?.label}{' '}
            {booking.bookingStatus === 'CANCELLED' ? (
              <XCircleIcon className="w-5 h-5 inline text-red-400" />
            ) : (
              <CheckCircleIcon className="w-5 h-5 inline text-blue-500" />
            )}
          </h3>
          <small className="text-slate-600 text-xs">
            {'INR'} {formatPrice.format(200)}
          </small>
        </div>
      </div>
      <Tags data={tagNames()} />
      <div className="px-4 pb-4">
        <Bullets data={booking?.bullets} />
        <If condition={type === FEED_TYPE.PAST}>
          <Then>
            <div className="flex mt-4 space-x-4">
              <button
                onClick={() => updateDownloadAppBottomSheetState(true)}
                className="inline-flex items-center justify-center w-full py-2 border border-slate-400 rounded-xl text-sm font-medium focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-200 shadow-sm"
              >
                Rate Session
              </button>
              {booking?.recording && (
                <button
                  onClick={() => handleViewRecording(booking?.recording)}
                  className="inline-flex items-center justify-center w-full py-2 border border-slate-400 rounded-xl text-sm font-medium focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-200 shadow-sm"
                >
                  View Recording
                </button>
              )}
            </div>
          </Then>
        </If>
        <If condition={(type === FEED_TYPE.TODAY || type === FEED_TYPE.UPCOMING) && !sessionEnded}>
          <Then>
            <div className="flex mt-4 space-x-4">
              <If condition={linkActive}>
                <Then>
                  <button
                    onClick={openSessionLink}
                    className="from-blue-600 to-blue-500 focus:ring-blue-400 uppercase inline-flex items-center justify-center w-full py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2"
                  >
                    LIVE {dayjs(booking?.startTime).fromNow()}
                  </button>
                </Then>
              </If>
              <If condition={sessionActive}>
                <Then>
                  <button
                    onClick={openSessionLink}
                    className="from-orange-600 to-orange-500 focus:ring-orange-400 uppercase inline-flex items-center justify-center w-full py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2"
                  >
                    LIVE - JOIN NOW
                  </button>
                </Then>
              </If>
              <If condition={!sessionActive && !linkActive}>
                <Then>
                  <button className="mt-4 inline-flex items-center justify-center w-full py-2 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-200 shadow-sm">
                    Session will start {dayjs(booking?.startTime).fromNow()}
                  </button>
                </Then>
              </If>
            </div>
          </Then>
        </If>
      </div>
    </div>
  );
};

export default React.memo(BookingCard);
