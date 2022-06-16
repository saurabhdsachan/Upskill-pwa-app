import Layout from '@components/Shared/Layout';
import LoadingState from '@components/Shared/LoadingState';
import { fromShortUrlKey } from '@utils/apiData';
import { sessionTypeMapperReverse } from '@utils/helpers';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const ShortPage = ({ data }) => {
  const session = data?.groupSession || data?.cohortSession || data?.planSession || data;

  const sessionType = sessionTypeMapperReverse(data?.sessionType);

  const router = useRouter();
  useEffect(() => {
    router.replace(
      {
        pathname: `/${data?.user?.username}/${data?.user?.userId}/${sessionType}/book/${session?.sessionId}`,
        query: { user: data?.user?.userId, userId: data?.user?.userId, sessionType, sessionId: session?.sessionId },
      },
      `/${data?.user?.username}/${data?.user?.userId}/${sessionType}/book/${session?.sessionId}`
    );
  }, [data?.sessionType, data?.user?.userId, data?.user?.username, router, session?.sessionId, sessionType]);

  return (
    <Layout>
      <Head>
        <title>Open Session | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={false} />
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

  return {
    props: {
      ...res,
    },
  };
};

export default React.memo(ShortPage);
