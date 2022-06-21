export const TOKEN = 'token';
export const DEVICE_ID = 'device-id';
export const ROOT_URL = 'root-url';

export enum SESSION_TYPE {
  DEMO = 'demo',
  CONNECT = 'connect',
  WORKSHOP = 'workshop',
  COURSE = 'course',
  PLAN = 'plan',
}

export const USER_TYPE = {
  USER: 'user',
  CREATOR: 'creator',
};

export const BOOKING_TYPE = {
  BOOKED: 'booked',
  RECEIVED: 'received',
};

export const FEED_TYPE = {
  TODAY: 'today',
  UPCOMING: 'upcoming',
  PAST: 'past',
  CANCELLED: 'cancelled',
  INPROGRESS: 'in_progress',
};

export const WEEKDAY = {
  mon: 0,
  tue: 1,
  wed: 2,
  thu: 3,
  fri: 4,
  sat: 5,
  sun: 6,
};

export enum PAYMENT_STATUS {
  PAID = 'PAID',
}

export const PRIVATE_PAGE_ROUTES = [
  '/book',
  `/bookings/${BOOKING_TYPE.BOOKED}`,
  `/bookings/${BOOKING_TYPE.RECEIVED}`,
  '/profile/update',
];

export const PRIVATE_API_ROUTES = [''];
