import Layout from '@components/Shared/Layout';
import Head from 'next/head';
import React from 'react';

const index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Auth | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={true} title="Login" />
      <Layout.Body>
        <div className="px-6">hi</div>
      </Layout.Body>
    </Layout>
  );
};

export default index;
