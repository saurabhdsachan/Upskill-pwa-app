import Bullets from '@components/Shared/Bullets';
import Button from '@components/Shared/Button/Button';
import Tags from '@components/Shared/Tags';
import { useDataBusStore } from '@context/dataBusContext';
import { StarIcon, VideoCameraIcon } from '@heroicons/react/outline';
import { blurredBgImage } from '@public/images/bg-base-64';
import { getCourseRecordings } from '@utils/apiData';
import { BOOKING_TYPE, FEED_TYPE, SESSION_TYPE } from '@utils/constants';
import { classNames, getImageUrl, sessionTypeMapperReverse } from '@utils/helpers';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Case, Default, If, Switch, Then } from 'react-if';

dayjs.extend(relativeTime);

const BookingCard = ({ data: { booking }, type, bookingType, authData }) => {
  const [timeRemaining, setTimeRemaining] = useState(booking?.startTime - Date.now());

  const linkActive = timeRemaining / (1000 * 60) <= 10 && booking?.startTime - Date.now() > 0;

  const sessionActive = timeRemaining / (1000 * 60) <= 0 && booking?.endTime - Date.now() > 0;

  const sessionEnded = booking?.endTime < Date.now();

  const { updateDownloadAppBottomSheetState, updateSessionRecordingList, updateShowRecordingBottomSheetState } =
    useDataBusStore();

  const handleViewRecording = async (data) => {
    if (sessionTypeMapperReverse(booking?.sessionType) !== SESSION_TYPE.COURSE) {
      updateSessionRecordingList(data);
      updateShowRecordingBottomSheetState(true);
    } else {
      const resp = await getCourseRecordings({ bookingId: booking?.bookingId });
      if (resp.status === 200) {
        updateSessionRecordingList({ list: resp?.data?.episodesRecordings });
        updateShowRecordingBottomSheetState(true);
      } else {
        toast.error('Error in fetching recordings');
      }
    }
  };

  const giveInfo = () => {
    toast(' You can join the session on or 10 minutes before the session starts', { id: 'joinInfo', icon: '⏰' });
  };

  const openSessionLink = () => {
    var a = document.createElement('a');
    a.target = '_self';
    a.href = `https://meet.pep.live/preview/room-id/user-group/${booking?.userSessionId}/${
      booking?.sessionType === SESSION_TYPE.PLAN ? booking?.startTime : booking?.sessionNumber
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
            alt={booking?.label}
            height={40}
            width={40}
            placeholder="blur"
            layout="responsive"
            blurDataURL={blurredBgImage}
          />
        </div>
        <div className="flex-1">
          <h3 className="capitalize inline">{booking?.label} </h3>
          <br />
          <small className="text-slate-600 text-xs">{booking?.priceLabel}</small>
          <If condition={type !== FEED_TYPE.TODAY && type !== FEED_TYPE.UPCOMING}>
            <Then>
              <Switch>
                <Case condition={booking?.bookingStatus === 'CANCELLED'}>
                  <small className="text-xs text-red-600"> - Cancelled</small>
                </Case>
                <Case condition={booking?.bookingStatus === 'CANCELLED_BY_USER'}>
                  <small className="text-xs text-red-600"> - Cancelled by User</small>
                </Case>
                <Case condition={booking?.bookingStatus === 'CANCELLED_BY_EXPERT'}>
                  <small className="text-xs text-red-600"> - Cancelled by Expert</small>
                </Case>
                <Case condition={booking?.bookingStatus === 'INITIATED'}>
                  <small className="text-xs text-blue-600"> - Initiated</small>
                </Case>
                <Default>
                  <small className="text-xs text-green-600"> - Booked</small>
                </Default>
              </Switch>
            </Then>
          </If>
        </div>
      </div>
      <Tags data={tagNames()} />
      <div className="px-4 pb-4">
        <Bullets data={booking?.bullets} />
        <If condition={type === FEED_TYPE.PAST}>
          <Then>
            <div className="flex mt-4 space-x-4">
              {bookingType !== BOOKING_TYPE.RECEIVED && (
                <Button onClick={() => updateDownloadAppBottomSheetState(true)}>
                  <StarIcon className="w-4 h-4 mr-2 inline" aria-hidden="true" />
                  Rate Session
                </Button>
              )}
              {booking?.recording && booking?.recording?.recordings?.length !== 0 ? (
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
                  <Button bg="red" onClick={openSessionLink} size="big" className="uppercase">
                    LIVE - JOIN NOW
                  </Button>
                </Then>
              </If>
              <If condition={!sessionActive && !linkActive}>
                <Then>
                  <Button size="big" className="uppercase" onClick={giveInfo}>
                    Starts at {dayjs(booking?.startTime).format('DD MMM (hh:mm a)')}
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
