import fetcher from '@utils/fetcher';
import { sessionTypeMapper } from '@utils/helpers';
import toast from 'react-hot-toast';

export const verifyUser = async () => {
  const endpoint = '/store/v1/user/details';

  return await fetcher(endpoint, { method: 'GET' });
};

export const bookDemoCall = async ({ creatorId, startTime, endTime }) => {
  if (!creatorId || !startTime || !endTime) {
    toast.error('Slot selection pending', { id: 'error' });

    return;
  }
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
  if (!creatorId || !expertiseId || !startTime || !endTime) {
    toast.error('Slot selection pending', { id: 'error' });

    return;
  }
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
  if (!sessionId || !startTime) {
    toast.error('Slot selection pending', { id: 'error' });

    return;
  }
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
  if (!sessionId || !sessionType || !instanceId) {
    toast.error('Slot selection pending', { id: 'error' });

    return;
  }
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

export const updateProfile = async ({ realname, username }) => {
  const endpoint = `/user/v1/user`;

  return await fetcher(endpoint, {
    method: 'PUT',
    body: {
      name: realname,
      username,
    },
  });
};

export const getCourseRecordings = async ({ bookingId }) => {
  const endpoint = `/store/v1/bookings/${bookingId}/recordings`;

  return await fetcher(endpoint);
};
