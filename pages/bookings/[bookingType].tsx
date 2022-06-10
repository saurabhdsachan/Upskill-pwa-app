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
import React, { useCallback, useEffect } from 'react';

const Bookings: React.FC = observer(() => {
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
      console.log('res', res);
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
      <Layout.Header backflow={true} title="My Bookings" />
      <Layout.Body>
        <div className="">
          {isCreator && (
            <div>
              <Link
                href={{
                  pathname: `/bookings/booked`,
                  query: { type, bookingType: 'booked' },
                }}
                as={`/bookings/booked?type=${type}`}
              >
                <a
                  className={classNames(
                    'w-32 py-2 text-sm leading-5 bg-white rounded-lg',
                    bookingType === 'booked' ? 'bg-gray-900 text-white' : 'text-gray-900 bg-gray-100 hover:bg-gray-300'
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
                    'w-32 py-2 text-sm leading-5 bg-white rounded-lg',
                    bookingType === 'received'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-900 bg-gray-100 hover:bg-gray-300'
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
                <div className="overflow-x-auto flex no-scrollbar">
                  {Object.entries(FEED_TYPE).map((item) => (
                    <Tab
                      key={item[1]}
                      className={({ selected }) =>
                        classNames(
                          selected ? 'border-blue-500' : 'border-slate-100',
                          'px-4 py-2 border-b-2 text-sm bg-white whitespace-nowrap uppercase'
                        )
                      }
                    >
                      {item[1]}
                    </Tab>
                  ))}
                </div>
              </div>
            </Tab.List>
            <Tab.Panels>
              {Object.entries(FEED_TYPE).map((item) => (
                <Tab.Panel key={item[1]} className="bg-slate-100 min-h-free p-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">{item[1]}</div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Layout.Body>
    </Layout>
  );
});

export default Bookings;
