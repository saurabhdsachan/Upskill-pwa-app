import ConnectCard from '@components/Cards/ConnectCard';
import CourseCard from '@components/Cards/CourseCard';
import PlanCard from '@components/Cards/PlanCard';
import WorkshopCard from '@components/Cards/WorkshopCard';
import ErrorState from '@components/Shared/ErrorState';
import Layout from '@components/Shared/Layout';
import { SESSION_TYPE } from '@utils/constants';
import fetcher from '@utils/fetcher';
import { getPageTitle, sessionTypeMapper } from '@utils/helpers';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { Case, Else, If, Switch, Then } from 'react-if';

interface IListing {
  data: any;
  status: number;
  sessionType: SESSION_TYPE;
  user: IUser;
  userId: string;
}

const Listing: React.FC<IListing> = ({ data, status, sessionType, user, userId }) => {
  const sessions = data?.expertise || data?.items?.map((item) => item?.session);

  return (
    <Layout>
      <Head>
        <title>{getPageTitle(sessionType)} | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header title={getPageTitle(sessionType)} backflow={true} showShare={false} showBooking={false} />
      <Layout.Body>
        <If condition={status > 300}>
          <Then>
            <ErrorState status={400} />
          </Then>
          <Else>
            <Switch>
              <Case condition={sessionType === SESSION_TYPE.CONNECT}>
                <div className="bg-white min-h-free">
                  <div className="px-6 grid gap-6 grid-cols-2 mb-10">
                    {sessions?.map((item) => (
                      <ConnectCard
                        key={`${SESSION_TYPE.CONNECT}-${item.expertiseId}`}
                        type="v-card"
                        data={item}
                        userId={userId}
                      />
                    ))}
                  </div>
                </div>
              </Case>
              <Case condition={sessionType === SESSION_TYPE.WORKSHOP}>
                <div className="bg-white min-h-free">
                  <div className="px-6 grid gap-6 grid-cols-2 mb-10">
                    {sessions?.map((item) => (
                      <WorkshopCard
                        key={`${SESSION_TYPE.WORKSHOP}-${item.sessionId}`}
                        type="v-card"
                        data={item}
                        userId={userId}
                      />
                    ))}
                  </div>
                </div>
              </Case>
              <Case condition={sessionType === SESSION_TYPE.COURSE}>
                <div className="bg-white min-h-free">
                  <div className="px-6 grid gap-6 grid-cols-2 mb-10">
                    {sessions?.map((item) => (
                      <CourseCard
                        key={`${SESSION_TYPE.COURSE}-${item.sessionId}`}
                        type="v-card"
                        data={item}
                        userId={userId}
                      />
                    ))}
                  </div>
                </div>
              </Case>
              <Case condition={sessionType === SESSION_TYPE.PLAN}>
                <div className="bg-white min-h-free">
                  <div className="px-6 grid gap-6 grid-cols-2 mb-10">
                    {sessions?.map((item) => (
                      <PlanCard
                        key={`${SESSION_TYPE.PLAN}-${item.sessionId}`}
                        type="v-card"
                        data={item}
                        userId={userId}
                      />
                    ))}
                  </div>
                </div>
              </Case>
            </Switch>
          </Else>
        </If>
      </Layout.Body>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params: { user, userId, sessionType } }) => {
  const creatorId = userId;

  let options = {
    method: 'GET',
    body: {
      feedType: 'CREATOR',
      filter: {
        creatorId,
        tense: 'UPCOMING',
        sessionType: sessionTypeMapper(sessionType as string),
      },
      limit: 18,
    },
  };

  let endpoint = '/feed/v1/feed';

  switch (sessionType) {
    case SESSION_TYPE.CONNECT:
      endpoint = `/store/v1/expertise/details?creatorId=${creatorId}`;
      options.method = 'GET';
      break;
    case SESSION_TYPE.WORKSHOP:
      endpoint = '/feed/v1/feed';
      options.method = 'POST';
      break;
    case SESSION_TYPE.COURSE:
      endpoint = '/feed/v1/feed';
      options.method = 'POST';
      break;
    case SESSION_TYPE.PLAN:
      endpoint = '/feed/v1/feed';
      options.method = 'POST';
      break;
  }

  const res = await fetcher(endpoint, options);

  return {
    props: {
      ...res,
      user,
      userId,
      sessionType,
    },
  };
};

export default Listing;
