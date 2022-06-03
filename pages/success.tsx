import Layout from '@components/Shared/Layout';
import LoadingState from '@components/Shared/LoadingState';
import LottieAnimation from '@components/Shared/LottieAnimation';
import { blurredBgImage } from '@public/images/bg-base-64';
import successLottie from '@public/lotties/success.json';
import { paymentVerify } from '@utils/constants/makeBooking';
import { classNames, getImageUrl } from '@utils/helpers';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';

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

  const verifyOrderPayment = useCallback(async () => {
    const { oid, pid, sign } = router?.query;
    const res = await paymentVerify({ oid, pid, sign });
    if (res?.status === 200) {
      setLoading(false);
      setBookingDetails(res?.data);
    } else {
      setLoading(true);
    }
  }, [router?.query]);

  useEffect(() => {
    verifyOrderPayment();
  }, [verifyOrderPayment]);

  return (
    <Layout>
      <Head>
        <title>Booking Successful | Pep</title>
      </Head>
      <Layout.Header backflow={true} title="Booking Success" />
      <Layout.Body>
        <div className="bg-white px-6 pb-16 items-center justify-center">
          <If condition={loading}>
            <Then>
              <LoadingState />
            </Then>
            <Else>
              <div className="flex items-center justify-center">
                <div className="-mr-16 ml-10">
                  <Image
                    className={classNames(!bookingDetails?.coverImgUrl && 'blur', 'rounded-full object-cover')}
                    src={
                      bookingDetails?.coverImgUrl
                        ? getImageUrl(bookingDetails?.coverImgUrl, { height: 180, width: 180 })
                        : blurredBgImage
                    }
                    alt={bookingDetails?.label}
                    width={120}
                    height={120}
                    placeholder="blur"
                    layout="intrinsic"
                    blurDataURL={blurredBgImage}
                  />
                </div>
                <div>
                  <LottieAnimation animationData={successLottie} loop={false} width={190} height={190} />
                </div>
              </div>
              <div className="px-6 text-center">
                <p>
                  Your booking <span className="text-blue-400">#{bookingDetails?.bookingId}</span> has been confirmed
                </p>
                <hr className="mt-6 mb-4" />
                <div className="my-6">
                  <h3 className="text-xl">{bookingDetails?.label}</h3>
                  <p className="text-slate-400">Status: {bookingDetails?.paymentStatus}</p>
                  <p className="text-slate-400">{bookingDetails?.priceLabel}</p>
                </div>
                <Link href="/bookings/booked">
                  <a className="inline-flex items-center justify-center py-2 px-6 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-gray-900 to-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-400">
                    My Bookings
                  </a>
                </Link>
              </div>
            </Else>
          </If>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default Slots;
