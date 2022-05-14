import Layout from '@components/Shared/Layout';
import { TicketIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Listing: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Listing | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={true} title="How to cook in 10 days" />
      <Layout.Body>
        <div>
          <div className="bg-white w-full h-80 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1652443589741-05b9605b7ba2?auto=format&fit=crop&w=800&q=80"
              alt=""
              title=""
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="p-6">
            <Link href="/chef-jordan/connect-me/book/learn-cooking-in-5-days">
              <a className="uppercase inline-flex items-center justify-center w-full py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-400">
                <TicketIcon className="h-4 w-4 mr-2" />
                See in details
              </a>
            </Link>
          </div>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default Listing;
