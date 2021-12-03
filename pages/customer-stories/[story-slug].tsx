import EmptyState from '@components/Shared/EmptyState';
import Layout from '@components/Shared/Layout';
import Head from 'next/head';
import React from 'react';

const CustomerStory: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Customer Story | Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <EmptyState title="Customer Stories" message="Please check your network settings" />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default CustomerStory;
