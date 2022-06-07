import Layout from '@components/Shared/Layout';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Home | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={false} />
      <Layout.Body>
        <div className="p-6">
          <p className="text-center p-6">Placeholder Page</p>
          <Link href="/sa14">
            <a className="inline-flex items-center justify-center w-full py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-blue-400 shadow-sm shadow-blue-500/50">
              Go To Sample Profile
            </a>
          </Link>
        </div>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Home;
