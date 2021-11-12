import Help from '@components/Help';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import Head from 'next/head';
import React from 'react';

export const search = (): JSX.Element => (
  <Layout>
    <Head>
      <title>Help | Spacejoy</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout.Banner />
    <Layout.Header />
    <Layout.Body>
      <Help />
      <PreFooter />
    </Layout.Body>
    <Layout.Footer />
  </Layout>
);

export default search;
