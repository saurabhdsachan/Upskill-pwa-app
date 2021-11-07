import SearchBox from '@components/Search/SearchBox';
import Layout from '@components/Shared/Layout';
import Head from 'next/head';
import React from 'react';

export const search = (): JSX.Element => (
  <Layout>
    <Head>
      <title>Search | Spacejoy</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout.Banner />
    <Layout.Header />
    <Layout.Body>
      <SearchBox />
    </Layout.Body>
  </Layout>
);

export default search;
