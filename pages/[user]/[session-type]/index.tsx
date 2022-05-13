import Layout from '@components/Shared/Layout';
import { TicketIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Listing: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Listing | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={false} />
      <Layout.Body>
        <div className="p-6">
          <p className="text-center p-6">all 1:1 / workshop / courses / Plans listing goes here</p>
          <p className="text-center p-6">Now Pick a session to check details</p>
          <h3 className="text-center p-6">Learn cooking in 5 days</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi minus, doloribus laborum dignissimos
            repudiandae ad, praesentium ipsa debitis quibusdam deleniti temporibus porro neque expedita possimus
            suscipit quaerat sit ex soluta!
          </p>
          <br />
          <Link href="/chef-jordan/connect-me/book/learn-cooking-in-5-days">
            <a className="uppercase inline-flex items-center justify-center w-full py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-400">
              <TicketIcon className="h-4 w-4 mr-2" />
              See in details
            </a>
          </Link>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default Listing;
