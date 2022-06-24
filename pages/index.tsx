import Layout from '@components/Shared/Layout';
import LoadingState from '@components/Shared/LoadingState';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { ROOT_URL } from '../utils/constants/index';

const Home: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    const rootUrl = Cookies.get(ROOT_URL);
    router.replace({ pathname: rootUrl ? `/${rootUrl}` : '/', query: { user: rootUrl } }, `/${rootUrl}`, {
      shallow: true,
    });
  }, [router]);

  return (
    <Layout>
      <Head>
        <title>Pep | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header title="Pep" backflow={false} showShare={false} showBooking={false} />
      <Layout.Body>
        <LoadingState />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Home;
