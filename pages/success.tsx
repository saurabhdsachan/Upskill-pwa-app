import Layout from '@components/Shared/Layout';
import LottieAnimation from '@components/Shared/LottieAnimation';
import successLottie from '@public/lotties/success.json';
import Head from 'next/head';
import React from 'react';

const Slots: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Slots | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={true} title="Booking Success" />
      <Layout.Body>
        <div className="p-6 min-h-[500px] flex items-center">
          <div>
            <div className="w-1/2 mx-auto">
              <LottieAnimation animationData={successLottie} loop={false} />
            </div>
            <p className="text-center my-6">
              Your booking has been <br /> confirmed
            </p>
          </div>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default Slots;
