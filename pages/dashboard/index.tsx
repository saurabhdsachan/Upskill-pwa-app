import EmptyState from '@components/Shared/EmptyState';
import Layout from '@components/Shared/Layout';
import Head from 'next/head';
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Dashboard | Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <EmptyState title="Coming Soon" message="Hold On" />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Dashboard;
