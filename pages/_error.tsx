import ErrorState from '@components/Shared/ErrorState';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import Head from 'next/head';
import React from 'react';

const Error = ({ statusCode }: { statusCode: number }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Help | Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <ErrorState status={statusCode} />
        <PreFooter />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default Error;
