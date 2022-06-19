import EmptyState from '@components/Shared/EmptyState';
import Layout from '@components/Shared/Layout';
import Head from 'next/head';
import React from 'react';

const Offline: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Offline | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header title="Offline" backflow={true} showShare={false} showBooking={false} />
      <Layout.Body>
        <EmptyState title="Connection Offline" message="Please check your network settings" />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Offline;
