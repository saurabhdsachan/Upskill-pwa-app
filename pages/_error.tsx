import ErrorState from '@components/Shared/ErrorState';
import Layout from '@components/Shared/Layout';
import Head from 'next/head';
import React from 'react';

const Error = ({ statusCode }: { statusCode: number }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{statusCode} | Pep</title>
      </Head>
      <Layout.Header />
      <Layout.Body>
        <ErrorState status={statusCode} />
      </Layout.Body>
      <Layout.PreFooter />
    </Layout>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default Error;
