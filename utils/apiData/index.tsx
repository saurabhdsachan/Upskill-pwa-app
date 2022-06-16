import fetcher from '@utils/fetcher';
import { sessionTypeMapper } from '@utils/helpers';

export const verifyUser = async () => {
  const endpoint = '/store/v1/user/details';

  return await fetcher(endpoint, { method: 'GET' });
};

export const bookDemoCall = async ({ creatorId, startTime, endTime }) => {
  const endpoint = `/bookings/v1/booking/demo`;

  return await fetcher(endpoint, {
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
  const endpoint = `/bookings/v1/booking/expertise`;

  return await fetcher(endpoint, {
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
  const endpoint = `/bookings/v1/booking/plan`;

  return await fetcher(endpoint, {
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

export const getBookings = async ({ userType, feedType, cursor }) => {
  const endpoint = `/feed/v1/bookings`;

  return await fetcher(endpoint, {
    method: 'POST',
    body: {
      userType,
      feedType,
      cursor,
      limit: 18,
    },
  });
};

export const fromShortUrlKey = async ({ key }) => {
  const endpoint = `/store/v1/sessions/details/mini?keyId=${key}`;

  return await fetcher(endpoint);
};
