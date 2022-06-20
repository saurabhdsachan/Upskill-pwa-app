import Layout from '@components/Shared/Layout';
import LottieAnimation from '@components/Shared/LottieAnimation';
import successLottie from '@public/lotties/success.json';
import { paymentVerify } from '@utils/apiData';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

const Slots: React.FC = () => {
  const [bookingDetails, setBookingDetails] = useState({
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
        <div className="bg-white items-center justify-center">
          <LottieAnimation animationData={successLottie} loop={false} width={240} height={240} />
        </div>
        <div className="px-6 text-center">
          <p className="my-6">Your booking has been confirmed</p>
          <Link href="/bookings/booked?type=today">
            <a className="inline-flex items-center justify-center py-2 px-6 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-gray-900 to-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-400">
              My Bookings
            </a>
          </Link>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default React.memo(Slots);
