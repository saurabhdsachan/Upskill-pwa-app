import BookingCard from '@components/Cards/BookingCard';
import Button from '@components/Shared/Button/Button';
import EmptyState from '@components/Shared/EmptyState';
import Layout from '@components/Shared/Layout';
import LoadingState from '@components/Shared/LoadingState';
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
  const [cursor, setCursor] = useState<string | null>(null);
  const [bookingList, setBookingList] = useState([]);
  const [tabList, setTabList] = useState([]);
  const { authData } = useAuthStore();
  const isCreator = toJS(authData)?.creator;
  const router = useRouter();

  const { type, bookingType }: IQuery = router?.query;

  const tabs = Object.values(FEED_TYPE);

  const getMoreData = async () => {
    const res = await getBookings({
      userType: (bookingType === 'received' ? USER_TYPE.CREATOR : USER_TYPE.USER)?.toUpperCase(),
      feedType: type?.toUpperCase(),
      cursor,
    });
    setBookingList([...bookingList, ...res?.data?.items]);
    setCursor(res?.data?.cursor);
  };

  const getBookingData = useCallback(async () => {
    setBookingList([]);
    if (authData.userId && type && bookingType) {
      const res = await getBookings({
        userType: (bookingType === 'received' ? USER_TYPE.CREATOR : USER_TYPE.USER)?.toUpperCase(),
        feedType: type?.toUpperCase(),
        cursor: null,
      });
      setBookingList(res?.data?.items);
      setTabList(res?.data?.chips);
      setCursor(res?.data?.cursor);
    }
  }, [authData?.userId, bookingType, type]);

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
        <div className="bg-white relative">
          {isCreator && (
            <div className="bg-white flex">
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
                    'pb-3 border-b-2 text-sm leading-5 bg-white flex-1 text-center focus:outline-none'
                  )}
                >
                  Received
                </a>
              </Link>
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
                    'pb-3 border-b-2 text-sm leading-5 bg-white flex-1 text-center focus:outline-none'
                  )}
                >
                  Booked
                </a>
              </Link>
            </div>
          )}
          <If condition={tabList.length !== 0}>
            <Then>
              <Tab.Group
                defaultIndex={tabs?.indexOf(type as string)}
                onChange={(index) => {
                  router.push(
                    { pathname: `/bookings/${bookingType}`, query: { type: tabs[index], bookingType } },
                    `/bookings/${bookingType}?type=${tabs[index]}`
                  );
                }}
              >
                <Tab.List className="sticky top-14 bg-white z-10">
                  <div className="overflow-auto">
                    <div className="overflow-x-auto flex no-scrollbar">
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
                          {tabList?.[index]?.chipName}
                        </Tab>
                      ))}
                    </div>
                  </div>
                </Tab.List>

                <Tab.Panels>
                  {Object.entries(FEED_TYPE).map((item) => (
                    <Tab.Panel key={`${item[1]}-panel`} className="min-h-free p-4">
                      <If condition={bookingList !== null && bookingList?.length !== 0}>
                        <Then>
                          {bookingList?.map((booking) => {
                            return <BookingCard key={booking?.booking?.bookingId} data={booking} type={type} />;
                          })}
                          <div className="flex">
                            {!!cursor && bookingList?.length > 0 && (
                              <Button size="big" bg="blue" onClick={getMoreData}>
                                Load More
                              </Button>
                            )}
                          </div>
                        </Then>
                        <Else>
                          <EmptyState title={`No ${type} bookings found`} />
                        </Else>
                      </If>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </Then>
            <Else>
              <LoadingState />
            </Else>
          </If>
        </div>
      </Layout.Body>
      {bookingList?.length !== 0 && bookingList !== null && <Layout.PreFooter />}
      <Layout.Footer />
    </Layout>
  );
});

export default Bookings;
