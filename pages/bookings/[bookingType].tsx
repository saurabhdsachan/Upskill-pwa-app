import BookingCard from '@components/Cards/BookingCard';
import Layout from '@components/Shared/Layout';
import { useAuthStore } from '@context/authContext';
import { Tab } from '@headlessui/react';
import { getBookings } from '@utils/apiData';
import { FEED_TYPE, USER_TYPE } from '@utils/constants';
import { classNames } from '@utils/helpers';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

const Bookings: React.FC = observer(() => {
  const [bookingList, setBookingList] = useState([]);
  const [tabList, setTabList] = useState([]);
  const { authData } = useAuthStore();
  const isCreator = toJS(authData)?.creator;
  const router = useRouter();

  const { type, bookingType } = router?.query;

  const getBookingData = useCallback(async () => {
    if (type && bookingType) {
      const res = await getBookings({
        userType: (bookingType === 'received' ? USER_TYPE.CREATOR : USER_TYPE.USER)?.toUpperCase(),
        feedType: type?.toUpperCase(),
        cursor: null,
      });
      setBookingList(res?.data?.items);
      setTabList(res?.data?.chips);
    }
  }, [bookingType, type]);

  useEffect(() => {
    getBookingData();
  }, [getBookingData]);

  return (
    <Layout>
      <Head>
        <title>{bookingType} bookings | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={false} title="My Bookings" />
      <Layout.Body>
        <div className="">
          {isCreator && (
            <div className="bg-white flex">
              <Link
                href={{
                  pathname: `/bookings/booked`,
                  query: { type, bookingType: 'booked' },
                }}
                as={`/bookings/booked?type=${type}`}
              >
                <a
                  className={classNames(
                    bookingType === 'booked' ? 'bg-blue-600 text-white' : ' bg-gray-100',
                    'py-3 text-sm leading-5 bg-white flex-1 text-center focus:outline-none'
                  )}
                >
                  Booked
                </a>
              </Link>
              <Link
                href={{
                  pathname: `/bookings/received`,
                  query: { type, bookingType: 'received' },
                }}
                as={`/bookings/received?type=${type}`}
              >
                <a
                  className={classNames(
                    bookingType === 'received' ? 'bg-blue-600 text-white' : ' bg-gray-100',
                    'py-3 text-sm leading-5 bg-white flex-1 text-center focus:outline-none'
                  )}
                >
                  Received
                </a>
              </Link>
            </div>
          )}
          <Tab.Group
            defaultIndex={Object.values(FEED_TYPE).indexOf(type)}
            onChange={(index) => {
              router.push(
                { pathname: `/bookings/${bookingType}`, query: { type: Object.values(FEED_TYPE)[index], bookingType } },
                `/bookings/${bookingType}?type=${Object.values(FEED_TYPE)[index]}`
              );
            }}
          >
            <Tab.List>
              <div className="relative overflow-auto">
                <div className="overflow-x-auto flex no-scrollbar sticky top-40">
                  {Object.entries(FEED_TYPE).map((item, index) => (
                    <Tab
                      key={item[1]}
                      className={({ selected }) =>
                        classNames(
                          selected ? 'border-blue-500' : 'border-slate-100 text-slate-400',
                          'px-4 py-3 border-b-2 text-sm bg-white whitespace-nowrap focus:outline-none'
                        )
                      }
                    >
                      {tabList[index]?.chipName || item[1]}
                    </Tab>
                  ))}
                </div>
              </div>
            </Tab.List>
            <Tab.Panels>
              {Object.entries(FEED_TYPE).map((item) => (
                <Tab.Panel key={`${item[1]}-panel`} className="bg-slate-100 min-h-free p-4">
                  {bookingList?.map((booking) => {
                    return <BookingCard key={booking?.booking?.bookingId} data={booking} type={type} />;
                  })}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
});

export default Bookings;
