import Layout from '@components/Shared/Layout';
import Head from 'next/head';
import React from 'react';

const Bookings: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Booked Bookings | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={false} title="My Bookings" />
      <Layout.Body>
        <div className="p-6 items-center justify-center">
          <p>My Bookings</p>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default Bookings;
