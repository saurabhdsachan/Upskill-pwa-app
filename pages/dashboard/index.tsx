import EmptyState from '@components/Shared/EmptyState';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
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
        <div className="container mx-auto px-4">
          <EmptyState title="Coming Soon" message="Hold On" />
          <PreFooter />
        </div>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Dashboard;
