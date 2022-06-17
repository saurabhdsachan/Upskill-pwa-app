import Bullets from '@components/Shared/Bullets';
import Button from '@components/Shared/Button/Button';
import Tags from '@components/Shared/Tags';
import { useDataBusStore } from '@context/dataBusContext';
import { CheckCircleIcon, StarIcon, VideoCameraIcon, XCircleIcon } from '@heroicons/react/outline';
import { blurredBgImage } from '@public/images/bg-base-64';
import { FEED_TYPE } from '@utils/constants';
import { classNames, formatPrice, getImageUrl } from '@utils/helpers';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
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

  const giveInfo = () => {
    toast.error(' You can join the session on or 10 minutes before the session starts', { id: 'joinInfo' });
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
    <div className="mb-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
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
              <XCircleIcon className="w-5 h-5 inline text-red-400" aria-hidden="true" />
            ) : (
              <CheckCircleIcon className="w-5 h-5 inline text-blue-500" aria-hidden="true" />
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
              <Button onClick={() => updateDownloadAppBottomSheetState(true)}>
                <StarIcon className="w-4 h-4 mr-2 inline" aria-hidden="true" />
                Rate Session
              </Button>
              {booking?.recording ? (
                <Button onClick={() => handleViewRecording(booking?.recording)}>
                  <VideoCameraIcon className="w-4 h-4 mr-2 inline" aria-hidden="true" />
                  Recordings
                </Button>
              ) : (
                <Button disabled>
                  <VideoCameraIcon className="w-4 h-4 mr-2 inline" aria-hidden="true" />
                  Unavailable
                </Button>
              )}
            </div>
          </Then>
        </If>
        <If condition={(type === FEED_TYPE.TODAY || type === FEED_TYPE.UPCOMING) && !sessionEnded}>
          <Then>
            <div className="flex mt-4 space-x-4">
              <If condition={linkActive}>
                <Then>
                  <Button bg="blue" onClick={openSessionLink} size="big" className="uppercase">
                    LIVE {dayjs(booking?.startTime).fromNow()}
                  </Button>
                </Then>
              </If>
              <If condition={sessionActive}>
                <Then>
                  <Button bg="orange" onClick={openSessionLink} size="big" className="uppercase">
                    LIVE - JOIN NOW
                  </Button>
                </Then>
              </If>
              <If condition={!sessionActive && !linkActive}>
                <Then>
                  <Button size="big" className="uppercase" onClick={giveInfo}>
                    Session will start {dayjs(booking?.startTime).fromNow()}
                  </Button>
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
