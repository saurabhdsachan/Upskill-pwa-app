import Layout from '@components/Shared/Layout';
import LottieAnimation from '@components/Shared/LottieAnimation';
import successLottie from '@public/lotties/success.json';
import Head from 'next/head';
import React from 'react';

const Received: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Received Bookings | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={false} title="My Received" />
      <Layout.Body>
        <div className="p-6 items-center justify-center">
          <div className="relative">
            <div className="w-full mx-auto">
              <LottieAnimation animationData={successLottie} loop={false} width={240} height={240} />
            </div>
          </div>
          <div className="my-6 px-6 text-center">
            <p className="mb-6">
              Your booking has been <br /> confirmed
            </p>
            <button className="inline-flex items-center justify-center py-2 px-6 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-gray-900 to-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-400">
              My Received
            </button>
          </div>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default Received;
