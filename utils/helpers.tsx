import toast from 'react-hot-toast';
import { SESSION_TYPE, WEEKDAY } from './constants';

const debounce = (func, wait) => {
  let timeout;

  return function x(...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(this, args);
    }, wait);
  };
};

const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};

const currencyFormat = (price) => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

const classNames = (...classes) => classes.filter(Boolean).join(' ');

interface IImageOptions {
  height?: number;
  width?: number;
  format?: 'jpeg';
  quality?: number;
}

const getImageUrl = (formattedUrl: string | null, options: IImageOptions): undefined | string => {
  if (typeof formattedUrl !== 'string') {
    return undefined;
  }

  // return '/imgs/userAvatar.jpeg';

  return formattedUrl
    .split('{height}')
    .join(`h${options.height * 2 || 0}`)
    .split('{width}')
    .join(`w${options.width * 2 || 0}`)
    .split('{format}')
    .join(`${options.format || 'jpeg'}`)
    .split('{quality}')
    .join(`q${options.quality || 100}`);
};

const formatRating = (data) => {
  if (data?.HAS_REVIEW) delete data['HAS_REVIEW'];
  const tmp = [];
  for (let i = 5; i >= 1; i--) {
    let x = {
      rating: i,
      count: data[i] || 0,
    };
    tmp.push(x);
  }

  return tmp;
};

const formatPrice = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
});

const sessionTypeMapper = (key: string) => {
  switch (key) {
    case SESSION_TYPE.WORKSHOP:
      return 'GROUP';
    case SESSION_TYPE.COURSE:
      return 'COHORT';
    case SESSION_TYPE.PLAN:
      return 'PLAN';
    case SESSION_TYPE.CONNECT:
      return 'EXPERTISE';
  }
};

const sessionTypeMapperReverse = (key: string) => {
  switch (key) {
    case 'GROUP':
      return SESSION_TYPE.WORKSHOP;
    case 'COHORT':
      return SESSION_TYPE.COURSE;
    case 'PLAN':
      return SESSION_TYPE.PLAN;
    case 'EXPERTISE':
      return SESSION_TYPE.CONNECT;
  }
};

const weekShortName = (days) =>
  days
    ?.map((day) => day.substr(0, 3).toLowerCase())
    .sort((a, b) => {
      // @ts-ignore
      return WEEKDAY[a] - WEEKDAY[b];
    });

const tsConvert = (time) => {
  time = time.toString();
  if (time.length < 4) time = ['0'].concat(time).join('');
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])([0-5]\d)(:[0-5]\d)?$/) || [time];
  time = time.filter((item) => !!item);
  if (time.length > 1) {
    // If time format correct
    time = time.slice(1);
    // Remove full string match value
    time[2] = +time[0] < 12 ? ' am' : ' pm';
    // Set AM/PM
    time[0] = +time[0] % 12 || 12;
    // Adjust hours
  }

  return `${time.slice(0, 2).join(':')}${time.slice(2, 3)}`;
  // return adjusted time or original string
};

const parseJwt = (token) => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
};

const socialShare = async ({ title, text, url }) => {
  try {
    await navigator.share({ title, text, url });
    toast.success('Shared successfully', { id: 'success' });
  } catch (err) {}
};

export {
  debounce,
  arraysEqual,
  currencyFormat,
  classNames,
  getImageUrl,
  formatRating,
  formatPrice,
  sessionTypeMapper,
  sessionTypeMapperReverse,
  weekShortName,
  tsConvert,
  parseJwt,
  socialShare,
};
