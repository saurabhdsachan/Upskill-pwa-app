import ConnectSlotCard from '@components/Cards/ConnectSlotCard';
import CourseSlotCard from '@components/Cards/CourseSlotCard';
import PlanSlotCard from '@components/Cards/PlanSlotCard';
import WorkshopSlotCard from '@components/Cards/WorkshopSlotCard';
import EmptyState from '@components/Shared/EmptyState';
import ErrorState from '@components/Shared/ErrorState';
import Layout from '@components/Shared/Layout';
import LoadingState from '@components/Shared/LoadingState';
import { useAuthStore } from '@context/authContext';
import { useSlotsStore } from '@context/slotContext';
import { TicketIcon } from '@heroicons/react/outline';
import useFetcher from '@hooks/useFetcher';
import { CONNECT, COURSE, DEMO, PAYMENT_STATUS, PLAN, WORKSHOP } from '@utils/constants';
import { bookConnectCall, bookDemoCall, bookPlanCall, bookSessionCall } from '@utils/constants/makeBooking';
import { classNames } from '@utils/helpers';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import toast from 'react-hot-toast';
import { Case, Default, Else, If, Switch, Then } from 'react-if';
import useRazorpay, { RazorpayOptions } from 'react-razorpay';
import { IRazorPaySuccessResponse } from 'types/razorPay';

const Slots: React.FC = observer(() => {
  const Razorpay = useRazorpay();
  const router = useRouter();
  const { slots, setPlanSlots, setCourseSlots, setWorkshopSlots } = useSlotsStore();
  const { authData } = useAuthStore();
  const { sessionType, sessionId, userId } = router?.query || {};

  const handlePayment = useCallback(
    async ({ amount, currency, order_id }) => {
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_CLIENT_ID,
        amount,
        currency,
        name: 'Pep',
        description: 'Pep.live',
        image: 'https://cdn.razorpay.com/logos/Ij8ak6hPQABwob_medium.png',
        order_id,
        handler: (response: IRazorPaySuccessResponse) => {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
          if (razorpay_order_id && razorpay_payment_id && razorpay_signature) {
            router.replace(
              {
                pathname: '/success',
                query: { oid: razorpay_order_id, pid: razorpay_payment_id, sign: razorpay_signature },
              },
              `/success?oid=${razorpay_order_id}&pid=${razorpay_payment_id}&sign=${razorpay_signature}`
            );
          } else {
            alert('Booking failed, please try again later');
          }
        },
        prefill: {
          name: authData?.name,
          email: 'youremail@example.com',
          contact: '',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#000000',
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    },
    [Razorpay, authData?.name, router]
  );

  let endpoint = '';

  switch (sessionType) {
    case DEMO:
      endpoint = `/store/v1/demo/available-slots?creatorId=${userId}`;
      break;
    case CONNECT:
      endpoint = `/store/v1/expertise/available-slots?creatorId=${userId}&expertiseId=${sessionId}`;
      break;
    case PLAN:
      endpoint = `/bookings/v1/${sessionType}/slots?planId=${sessionId}`;
      break;
    default:
      endpoint = `/inventory/v1/${sessionType}/${sessionId}/user/instance?limit=20`;
      break;
  }

  const { data, error, loading } = useFetcher({ endpoint: sessionType && sessionId ? endpoint : '' });

  const instances = data?.data?.instances || data?.data?.startTimes || data?.data?.daySlots;

  const handleClick = async () => {
    const slotsData = await toJS(slots);

    if (!authData?.userId) {
      router.replace({
        pathname: '/auth',
        query: { returnUrl: router.asPath },
      });
    } else {
      let bookingInitResponse;
      switch (sessionType) {
        case DEMO:
          bookingInitResponse = await bookDemoCall({ creatorId: userId, ...slotsData?.demo });
          break;
        case CONNECT:
          bookingInitResponse = await bookConnectCall({
            creatorId: userId,
            expertiseId: sessionId,
            ...slotsData?.connect,
          });
          break;
        case WORKSHOP:
          bookingInitResponse = await bookSessionCall({ sessionType, sessionId, ...slotsData?.workshop });
          break;
        case COURSE:
          bookingInitResponse = await bookSessionCall({ sessionType, sessionId, ...slotsData?.course });
          break;
        case PLAN:
          bookingInitResponse = await bookPlanCall({ sessionId, ...slotsData?.plan });
          break;
      }
      if (bookingInitResponse?.status === 200 && bookingInitResponse?.data?.success) {
        if (
          sessionType !== DEMO &&
          bookingInitResponse?.data?.data?.price !== 0 &&
          bookingInitResponse?.data?.data?.paymentStatus !== PAYMENT_STATUS?.PAID
        ) {
          handlePayment({
            amount: (bookingInitResponse?.data?.data?.price * 100).toString(),
            currency: 'INR',
            order_id: bookingInitResponse?.data?.data?.rpOrderId,
          });
        } else {
          router.push({
            pathname: '/success',
            query: {
              oid: bookingInitResponse?.data?.data?.bookingId,
            },
          });
        }
      } else {
        toast.error(bookingInitResponse?.data?.message);
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
        <Switch>
          <Case condition={instances?.length && !loading && !error}>
            <div
              className={classNames(
                sessionType === CONNECT || sessionType === DEMO ? 'py-6' : 'p-6',
                'min-h-free bg-slate-100'
              )}
            >
              <If condition={sessionType === CONNECT || sessionType === DEMO}>
                <Then>
                  <ConnectSlotCard data={instances} sessionType={sessionType} />
                </Then>
                <Else>
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
                </Else>
              </If>
            </div>
            <div className="p-6 sticky bottom-0 bg-white">
              <button
                onClick={handleClick}
                className="uppercase inline-flex items-center justify-center w-full py-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-400"
              >
                <TicketIcon className="h-4 w-4 mr-2" />
                {!authData?.userId && 'Login & '}Book Now
              </button>
            </div>
          </Case>
          <Case condition={loading}>
            <LoadingState />
          </Case>
          <Case condition={error}>
            <ErrorState />
          </Case>
          <Default>
            <EmptyState title="No slots available" message="Right now there are no slots available" />
          </Default>
        </Switch>
      </Layout.Body>
    </Layout>
  );
});

export default React.memo(Slots);
