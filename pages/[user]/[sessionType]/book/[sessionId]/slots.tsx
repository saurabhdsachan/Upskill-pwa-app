import CourseSlotCard from '@components/Cards/CourseSlotCard';
import PlanSlotCard from '@components/Cards/PlanSlotCard';
import WorkshopSlotCard from '@components/Cards/WorkshopSlotCard';
import EmptyState from '@components/Shared/EmptyState';
import Layout from '@components/Shared/Layout';
import { useAuthStore } from '@context/authContext';
import { useSlotsStore } from '@context/slotContext';
import { TicketIcon } from '@heroicons/react/outline';
import useFetcher from '@hooks/useFetcher';
import { CONNECT, COURSE, DEMO, PLAN, WORKSHOP } from '@utils/constants';
import { bookConnectCall, bookDemoCall, bookPlanCall, bookSessionCall } from '@utils/constants/makeBooking';
import { observer } from 'mobx-react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Else, If, Then } from 'react-if';

const Slots: React.FC = observer(() => {
  const router = useRouter();
  const { slots, setConnectSlots, setPlanSlots, setCourseSlots, setWorkshopSlots } = useSlotsStore();
  const { authData } = useAuthStore();
  const { sessionType, sessionId } = router?.query || {};

  const endpoint =
    sessionType === PLAN
      ? `/bookings/v1/${sessionType}/slots?planId=${sessionId}`
      : `/inventory/v1/${sessionType}/${sessionId}/user/instance?limit=20`;

  const { data, error, loading } = useFetcher({ endpoint: sessionType && sessionId ? endpoint : '' });

  const instances = data?.data?.instances || data?.data?.startTimes;

  const handleClick = () => {
    if (!authData?.userId) {
      router.replace({
        pathname: '/auth',
        query: { returnUrl: router.asPath },
      });
    } else {
      switch (sessionType) {
        case DEMO:
          return bookDemoCall(slots.demo);
        case CONNECT:
          return bookConnectCall(slots.connect);
        case WORKSHOP:
          return bookSessionCall({ sessionType, sessionId, ...slots.workShops });
        case COURSE:
          return bookSessionCall({ sessionType, sessionId, ...slots.course });
        case PLAN:
          return bookPlanCall({ sessionId, ...slots.plan });
      }
    }
  };

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
                    return (
                      <WorkshopSlotCard
                        key={slot?.instanceId}
                        data={slot}
                        onClick={() => setWorkshopSlots(slot)}
                        isSelected={slot?.instanceId === slots?.workshop?.instanceId}
                      />
                    );
                  case COURSE:
                    return (
                      <CourseSlotCard
                        key={slot?.instanceId}
                        data={slot}
                        onClick={() => setCourseSlots(slot)}
                        isSelected={slot?.instanceId === slots?.course?.instanceId}
                      />
                    );
                  case PLAN:
                    return (
                      <PlanSlotCard
                        key={slot}
                        data={slot}
                        onClick={() => setPlanSlots({ startTime: slot })}
                        isSelected={slot === slots?.plan?.startTime}
                      />
                    );
                }
              })}
            </div>
            <div className="p-6 sticky bottom-0 bg-white">
              <button
                onClick={handleClick}
                className="uppercase inline-flex items-center justify-center w-full py-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-400"
              >
                <TicketIcon className="h-4 w-4 mr-2" />
                {!authData.userId && 'Login & '}Book Now
              </button>
            </div>
          </Then>
          <Else>
            <EmptyState title="No slots available" message="Right now there are no slots available" />
          </Else>
        </If>
      </Layout.Body>
    </Layout>
  );
});

export default Slots;
