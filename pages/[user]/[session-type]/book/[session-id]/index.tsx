import Layout from '@components/Shared/Layout';
import { TicketIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Book: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Book | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={false} />
      <Layout.Body>
        <div className="p-6">
          <p className="text-center p-6">Learn cooking in 5 days full details goes here</p>
          <h3 className="text-center p-6">Learn cooking in 5 days</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur iusto veniam commodi possimus libero.
            Repellendus veniam cumque pariatur similique nobis placeat, optio harum quas labore explicabo exercitationem
            necessitatibus, veritatis dicta.
          </p>
          <br />
          <Link href="/chef-jordan/connect-me/book/learn-cooking-in-5-days/slots">
            <a className="uppercase inline-flex items-center justify-center w-full py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-400">
              <TicketIcon className="h-4 w-4 mr-2" />
              Check Slots
            </a>
          </Link>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default Book;
