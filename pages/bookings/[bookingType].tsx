import BookingCard from '@components/Cards/BookingCard';
import EmptyState from '@components/Shared/EmptyState';
import Layout from '@components/Shared/Layout';
import QuickHelp from '@components/Shared/QuickHelp';
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
import { Else, If, Then } from 'react-if';

interface IQuery {
  type?: string;
  bookingType?: string;
}

const Bookings: React.FC = observer(() => {
  const [bookingList, setBookingList] = useState([]);
  const [tabList, setTabList] = useState([]);
  const { authData } = useAuthStore();
  const isCreator = toJS(authData)?.creator;
  const router = useRouter();

  const { type, bookingType }: IQuery = router?.query;

  const getBookingData = useCallback(async () => {
    if (authData.userId && type && bookingType) {
      const res = await getBookings({
        userType: (bookingType === 'received' ? USER_TYPE.CREATOR : USER_TYPE.USER)?.toUpperCase(),
        feedType: type?.toUpperCase(),
        cursor: null,
      });
      setBookingList(res?.data?.items);
      setTabList(res?.data?.chips);
    }
  }, [authData.userId, bookingType, type]);

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
        <div className="bg-white">
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
                    bookingType === 'booked' ? 'border-blue-500' : ' border-gray-100',
                    'py-3 border-b-2 text-sm leading-5 bg-white flex-1 text-center focus:outline-none'
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
                    bookingType === 'received' ? 'border-blue-500' : ' border-gray-100',
                    'py-3 border-b-2 text-sm leading-5 bg-white flex-1 text-center focus:outline-none'
                  )}
                >
                  Received
                </a>
              </Link>
            </div>
          )}
          <Tab.Group
            defaultIndex={Object.values(FEED_TYPE).indexOf(type as string)}
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
                          'px-4 py-3 border-b-2 text-xs bg-white whitespace-nowrap focus:outline-none'
                        )
                      }
                    >
                      {tabList?.length !== 0 ? tabList[index]?.chipName : item[1]}
                    </Tab>
                  ))}
                </div>
              </div>
            </Tab.List>

            <Tab.Panels>
              {Object.entries(FEED_TYPE).map((item) => (
                <Tab.Panel key={`${item[1]}-panel`} className="min-h-free p-4">
                  <If condition={bookingList !== null}>
                    <Then>
                      {bookingList?.map((booking) => {
                        return <BookingCard key={booking?.booking?.bookingId} data={booking} type={type} />;
                      })}
                      <div className="mt-14">
                        <QuickHelp />
                      </div>
                    </Then>
                    <Else>
                      <EmptyState title="No bookings found" />
                    </Else>
                  </If>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Layout.Body>
      {bookingList !== null && <Layout.PreFooter />}
      <Layout.Footer />
    </Layout>
  );
});

export default Bookings;
