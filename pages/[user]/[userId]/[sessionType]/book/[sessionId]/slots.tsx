import ConnectSlotCard from '@components/Cards/ConnectSlotCard';
import CourseSlotCard from '@components/Cards/CourseSlotCard';
import PlanSlotCard from '@components/Cards/PlanSlotCard';
import WorkshopSlotCard from '@components/Cards/WorkshopSlotCard';
import Button from '@components/Shared/Button/Button';
import EmptyState from '@components/Shared/EmptyState';
import ErrorState from '@components/Shared/ErrorState';
import Layout from '@components/Shared/Layout';
import LoadingState from '@components/Shared/LoadingState';
import { useAuthStore } from '@context/authContext';
import { useSlotsStore } from '@context/slotContext';
import { TicketIcon } from '@heroicons/react/outline';
import useFetcher from '@hooks/useFetcher';
import { bookConnectCall, bookDemoCall, bookPlanCall, bookSessionCall } from '@utils/apiData';
import { PAYMENT_STATUS, SESSION_TYPE } from '@utils/constants';
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
    case SESSION_TYPE.DEMO:
      endpoint = `/store/v1/demo/available-slots?creatorId=${userId}`;
      break;
    case SESSION_TYPE.CONNECT:
      endpoint = `/store/v1/expertise/available-slots?creatorId=${userId}&expertiseId=${sessionId}`;
      break;
    case SESSION_TYPE.PLAN:
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
        case SESSION_TYPE.DEMO:
          bookingInitResponse = await bookDemoCall({ creatorId: userId, ...slotsData?.demo });
          break;
        case SESSION_TYPE.CONNECT:
          bookingInitResponse = await bookConnectCall({
            creatorId: userId,
            expertiseId: sessionId,
            ...slotsData?.connect,
          });
          break;
        case SESSION_TYPE.WORKSHOP:
          bookingInitResponse = await bookSessionCall({ sessionType, sessionId, ...slotsData?.workshop });
          break;
        case SESSION_TYPE.COURSE:
          bookingInitResponse = await bookSessionCall({ sessionType, sessionId, ...slotsData?.course });
          break;
        case SESSION_TYPE.PLAN:
          bookingInitResponse = await bookPlanCall({ sessionId, ...slotsData?.plan });
          break;
      }
      if (bookingInitResponse?.status === 200 && bookingInitResponse?.data?.success) {
        if (
          sessionType !== SESSION_TYPE.DEMO &&
          bookingInitResponse?.data?.data?.price !== 0 &&
          bookingInitResponse?.data?.data?.paymentStatus !== PAYMENT_STATUS.PAID
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
        bookingInitResponse?.data?.message && toast.error(bookingInitResponse?.data?.message);
      }
    }
  };

  return (
    <Layout>
      <Head>
        <title>Pick a slot | Pep</title>
      </Head>
      <Layout.Header
        backflow={true}
        title={sessionType === SESSION_TYPE.PLAN ? 'Pick a start date' : 'Choose a slot'}
      />
      <Layout.Body>
        <Switch>
          <Case condition={instances?.length && !loading && !error}>
            <div
              className={classNames(
                sessionType === SESSION_TYPE.CONNECT || sessionType === SESSION_TYPE.DEMO ? 'py-6' : 'p-6',
                'min-h-free bg-slate-100'
              )}
            >
              <If condition={sessionType === SESSION_TYPE.CONNECT || sessionType === SESSION_TYPE.DEMO}>
                <Then>
                  <ConnectSlotCard data={instances} sessionType={sessionType} />
                </Then>
                <Else>
                  {instances?.map((slot) => {
                    switch (sessionType) {
                      case SESSION_TYPE.WORKSHOP:
                        return (
                          <WorkshopSlotCard
                            key={slot?.instanceId}
                            data={slot}
                            onClick={() => setWorkshopSlots(slot)}
                            isSelected={slot?.instanceId === slots?.workshop?.instanceId}
                          />
                        );
                      case SESSION_TYPE.COURSE:
                        return (
                          <CourseSlotCard
                            key={slot?.instanceId}
                            data={slot}
                            onClick={() => setCourseSlots(slot)}
                            isSelected={slot?.instanceId === slots?.course?.instanceId}
                          />
                        );
                      case SESSION_TYPE.PLAN:
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
              <Button bg="orange" onClick={handleClick} className="uppercase py-4">
                <TicketIcon className="h-4 w-4 mr-2" aria-hidden="true" />
                {sessionType === SESSION_TYPE.PLAN ? 'Confirm & Pay' : 'Book Now'}
              </Button>
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
