import CourseSlotCard from '@components/Cards/CourseSlotCard';
import WorkshopSlotCard from '@components/Cards/WorkshopSlotCard';
import EmptyState from '@components/Shared/EmptyState';
import Layout from '@components/Shared/Layout';
import { TicketIcon } from '@heroicons/react/outline';
import { COURSE, PLAN, WORKSHOP } from '@utils/constants';
import fetcher from '@utils/fetcher';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Else, If, Then } from 'react-if';
import useSWR from 'swr';

const Slots: React.FC = () => {
  const router = useRouter();
  const { sessionType, sessionId } = router?.query || {};

  const { data, error } = useSWR(
    sessionType && sessionId ? `/inventory/v1/${sessionType}/${sessionId}/user/instance?limit=20` : '',
    fetcher
  );

  console.log('data', data);

  if (error) return <p>An error has occurred.</p>;
  if (!data) return <p>Loading</p>;

  const { instances } = data?.data || [];

  return (
    <Layout>
      <Head>
        <title>Pick a slot | Pep</title>
      </Head>
      <Layout.Header backflow={true} title="Choose a slot" />
      <Layout.Body>
        <If condition={instances?.length}>
          <Then>
            <div className="min-h-free p-6 bg-slate-100">
              {instances?.map((slot) => {
                switch (sessionType) {
                  case WORKSHOP:
                    return <WorkshopSlotCard key={slot?.instanceId} data={slot} />;
                  case COURSE:
                    return <CourseSlotCard key={slot?.instanceId} data={slot} />;
                  case PLAN:
                    return <WorkshopSlotCard key={slot?.instanceId} data={slot} />;
                }
              })}
            </div>
            <div className="p-6 sticky bottom-0 bg-white">
              <Link href="/success">
                <a className="uppercase inline-flex items-center justify-center w-full py-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-400">
                  <TicketIcon className="h-4 w-4 mr-2" />
                  Book Now
                </a>
              </Link>
            </div>
          </Then>
          <Else>
            <EmptyState title="No slots available" message="Right now there are no slots available" />
          </Else>
        </If>
      </Layout.Body>
    </Layout>
  );
};

export default Slots;
