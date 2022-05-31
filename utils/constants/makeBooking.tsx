import fetcher from '@utils/fetcher';

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
      sessionType,
      sessionId,
      instanceId,
    },
  });
};

export const paymentVerify = async ({ orderId, rpPaymentId, success, signature }) => {
  const endpoint = `/bookings/v1/booking/${orderId}/session/payment`;

  return await fetcher(endpoint, {
    method: 'POST',
    body: {
      rpPaymentId,
      success,
      signature,
    },
  });
};
