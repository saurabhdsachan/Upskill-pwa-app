import Layout from '@components/Shared/Layout';
import LoadingState from '@components/Shared/LoadingState';
import { fromShortUrlKey } from '@utils/apiData';
import { sessionTypeMapperReverse } from '@utils/helpers';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

const ShortPage = () => {
  return (
    <Layout>
      <Head>
        <title>Open Session | Pep</title>
      </Head>
      <Layout.Header backflow={false} showShare={false} showBooking={false} />
      <Layout.Body>
        <div className="p-6">
          <LoadingState />
        </div>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params: { key } }) => {
  const res = await fromShortUrlKey({ key });

  const session = res?.data?.groupSession || res?.data?.cohortSession || res?.data?.planSession || res?.data;

  const sessionType = sessionTypeMapperReverse(res?.data?.sessionType);

  const redirectURL = `/${res?.data?.user?.username}/${res?.data?.user?.userId}/${sessionType}/book/${session?.sessionId}`;

  return {
    redirect: {
      permanent: false,
      destination: redirectURL,
    },
    props: {},
  };
};

export default React.memo(ShortPage);
