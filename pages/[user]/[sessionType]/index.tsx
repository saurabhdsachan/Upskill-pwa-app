import CourseCard from '@components/Cards/CourseCard';
import ExpertiseCard from '@components/Cards/ExpertiseCard';
import ErrorState from '@components/Shared/ErrorState';
import Layout from '@components/Shared/Layout';
import fetcher from '@utils/fetcher';
import { sessionTypeMapper } from '@utils/helpers';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { Case, Else, If, Switch, Then } from 'react-if';
import PlanCard from '../../../components/Cards/PlanCard';
import WorkshopCard from '../../../components/Cards/WorkshopCard';
import { CONNECT, COURSE, PLAN, WORKSHOP } from '../../../utils/constants/index';

const Listing: React.FC = ({ data, status, sessionType }) => {
  const sessions = data?.expertise || data?.items?.map((item) => item?.session);

  return (
    <Layout>
      <Head>
        <title>{sessionType} | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={true} title={sessionType} />
      <If condition={status > 300}>
        <Then>
          <Layout.Body>
            <ErrorState status={400} />
          </Layout.Body>
        </Then>
        <Else>
          <Layout.Body>
            <Switch>
              <Case condition={sessionType === CONNECT}>
                <div className="bg-white min-h-free">
                  <div className="px-6 grid gap-6 grid-cols-2 mb-10">
                    {sessions?.map((item) => (
                      <ExpertiseCard
                        key={`${CONNECT}-${item.expertiseId}`}
                        type="v-card"
                        data={item}
                        userId={'55e6b80a-726b-430b-9988-52bc68c464e5'}
                      />
                    ))}
                  </div>
                </div>
              </Case>
              <Case condition={sessionType === WORKSHOP}>
                <div className="bg-white min-h-free">
                  <div className="px-6 grid gap-6 grid-cols-2 mb-10">
                    {sessions?.map((item) => (
                      <WorkshopCard
                        key={`${WORKSHOP}-${item.sessionId}`}
                        type="v-card"
                        data={item}
                        userId={'55e6b80a-726b-430b-9988-52bc68c464e5'}
                      />
                    ))}
                  </div>
                </div>
              </Case>
              <Case condition={sessionType === COURSE}>
                <div className="bg-white min-h-free">
                  <div className="px-6 grid gap-6 grid-cols-2 mb-10">
                    {sessions?.map((item) => (
                      <CourseCard
                        key={`${COURSE}-${item.sessionId}`}
                        type="v-card"
                        data={item}
                        userId={'55e6b80a-726b-430b-9988-52bc68c464e5'}
                      />
                    ))}
                  </div>
                </div>
              </Case>
              <Case condition={sessionType === PLAN}>
                <div className="bg-white min-h-free">
                  <div className="px-6 grid gap-6 grid-cols-2 mb-10">
                    {sessions?.map((item) => (
                      <PlanCard
                        key={`${PLAN}-${item.sessionId}`}
                        type="v-card"
                        data={item}
                        userId={'55e6b80a-726b-430b-9988-52bc68c464e5'}
                      />
                    ))}
                  </div>
                </div>
              </Case>
            </Switch>
          </Layout.Body>
        </Else>
      </If>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { user: 'saurabh', sessionType: WORKSHOP } },
      { params: { user: 'viveksharma', sessionType: WORKSHOP } },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { user, sessionType } }) => {
  // TODO: remove hardcoded userID
  const creatorId = '55e6b80a-726b-430b-9988-52bc68c464e5';

  let options = {
    method: 'GET',
    body: {
      feedType: 'CREATOR',
      filter: {
        creatorId,
        tense: 'UPCOMING',
        sessionType: sessionTypeMapper(sessionType),
      },
      limit: 25,
    },
  };

  let endpoint = '/feed/v1/feed';

  switch (sessionType) {
    case CONNECT: //TODO: remove hardcoded userID
      endpoint = `/store/v1/expertise/details?creatorId=${creatorId}`;
      options.method = 'GET';
      break;
    case WORKSHOP:
      endpoint = '/feed/v1/feed';
      options.method = 'POST';
      break;
    case COURSE:
      endpoint = '/feed/v1/feed';
      options.method = 'POST';
      break;
    case PLAN:
      endpoint = '/feed/v1/feed';
      options.method = 'POST';
      break;
  }

  const res = await fetcher(endpoint, options);

  return {
    props: {
      ...res,
      user,
      sessionType,
    },
  };
};

export default Listing;
