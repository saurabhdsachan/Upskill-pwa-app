import fetcher from '@utils/fetcher';
import { sessionTypeMapper } from '@utils/helpers';

export const bookDemoCall = async ({ creatorId, startTime, endTime }) => {
  const bookDemoEndpoint = `/bookings/v1/booking/demo`;

  return await fetcher(bookDemoEndpoint, {
    method: 'POST',
    body: {
      creatorId,
      availableSlot: {
        startTime,
        endTime,
      },
    },
  });
};

export const bookConnectCall = async ({ creatorId, expertiseId, startTime, endTime }) => {
  const bookConnectEndpoint = `/bookings/v1/booking/expertise`;

  return await fetcher(bookConnectEndpoint, {
    method: 'POST',
    body: {
      creatorId,
      expertiseId,
      availableSlot: {
        startTime,
        endTime,
      },
    },
  });
};

export const bookPlanCall = async ({ sessionId, startTime }) => {
  const bookPlanEndpoint = `/bookings/v1/booking/plan`;

  return await fetcher(bookPlanEndpoint, {
    method: 'POST',
    body: {
      sessionId,
      startTime,
    },
  });
};

export const bookSessionCall = async ({ sessionId, sessionType, instanceId }) => {
  const endpoint = `/bookings/v1/booking/session`;

  return await fetcher(endpoint, {
    method: 'POST',
    body: {
      sessionType: sessionTypeMapper(sessionType),
      sessionId,
      instanceId,
    },
  });
};

export const paymentVerify = async ({ oid, pid, sign }) => {
  const endpoint = `/bookings/v1/booking/${oid}/session/payment`;

  return await fetcher(endpoint, {
    method: 'POST',
    body: {
      rpPaymentId: pid,
      success: true,
      signature: sign,
    },
  });
};
