import Bullets from '@components/Shared/Bullets';
import Layout from '@components/Shared/Layout';
import LoadingState from '@components/Shared/LoadingState';
import LottieAnimation from '@components/Shared/LottieAnimation';
import Tags from '@components/Shared/Tags';
import successLottie from '@public/lotties/success.json';
import { paymentVerify } from '@utils/apiData';
import { tagNames } from '@utils/helpers';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';

const Slots: React.FC = () => {
  const [bookingDetails, setBookingDetails] = useState({
    bullets: [],
    chips: [],
    coverImgUrl: '',
    label: '',
    bookingId: '',
    paymentStatus: '',
    priceLabel: '',
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { oid, pid, sign } = router?.query;

  const verifyOrderPayment = useCallback(async () => {
    if (!pid && !sign) {
      setLoading(false);
    } else {
      const res = await paymentVerify({ oid, pid, sign });
      if (res?.status === 200) {
        setLoading(false);
        setBookingDetails(res?.data);
      } else {
        setLoading(false);
      }
    }
  }, [oid, pid, sign]);

  useEffect(() => {
    verifyOrderPayment();
  }, [verifyOrderPayment]);

  return (
    <Layout>
      <Head>
        <title>Booking Successful | Pep</title>
      </Head>
      <Layout.Header title="Booking Success" backflow={false} showShare={false} showBooking={false} />
      <Layout.Body>
        <If condition={loading}>
          <Then>
            <LoadingState />
          </Then>
          <Else>
            <div className="bg-white items-center justify-center">
              <LottieAnimation animationData={successLottie} loop={false} width={240} height={240} />
            </div>
            <div className="px-6 text-center">
              <p className="my-6">Your booking has been confirmed</p>
              <div className="my-6">
                <h3 className="text-xl">{bookingDetails?.label}</h3>
                {bookingDetails?.paymentStatus && (
                  <p className="text-slate-400">Status: {bookingDetails?.paymentStatus}</p>
                )}
                <p className="text-slate-400">{bookingDetails?.priceLabel}</p>
              </div>
            </div>
            {bookingDetails?.chips?.length !== 0 && <Tags data={tagNames(bookingDetails)} />}
            {bookingDetails?.bullets?.length !== 0 && (
              <div className="text-left px-6">
                <Bullets data={bookingDetails?.bullets} />
              </div>
            )}
            <div className="text-center mt-4">
              <Link href="/bookings/booked?type=today">
                <a className="inline-flex items-center justify-center py-2 px-6 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-gray-900 to-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-400">
                  My Bookings
                </a>
              </Link>
            </div>
          </Else>
        </If>
      </Layout.Body>
    </Layout>
  );
};

export default React.memo(Slots);
