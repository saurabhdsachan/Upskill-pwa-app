import Layout from '@components/Shared/Layout';
import Head from 'next/head';
import React from 'react';

const Reviews: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Reviews Chef Jordan | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={true} title="Reviews" />
      <Layout.Body>
        <div className="px-6">s</div>
      </Layout.Body>
    </Layout>
  );
};

export default Reviews;
