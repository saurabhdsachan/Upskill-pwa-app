import Layout from '@components/Shared/Layout';
import { TicketIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Slots: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Slots | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={false} />
      <Layout.Body>
        <div className="p-6 h-full bg-green-400">
          <h2>Success</h2>
          <Link href="/my-bookings">
            <a className="uppercase inline-flex items-center justify-center w-full py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-400">
              <TicketIcon className="h-4 w-4 mr-2" />
              check My Bookings
            </a>
          </Link>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default Slots;
