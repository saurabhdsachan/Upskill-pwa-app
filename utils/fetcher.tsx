import { TOKEN } from '@utils/constants';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';
import { DEVICE_ID } from './constants/index';
import { parseJwt } from './helpers';

const APIBaseUrl = process.env.NEXT_PUBLIC_BACKEND_HOST;

const fetcher = async (url: string, options?: any) => {
  const token = Cookies.get(TOKEN);
  const deviceId = Cookies.get(DEVICE_ID);
  const appUserId = token ? parseJwt(token) : '';

  const resp = await fetch(`${APIBaseUrl}${url}`, {
    method: options?.method || 'GET',
    mode: 'cors', // cors, no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'device-id': deviceId,
      'client-version': '2.1.4-dev',
      'client-version-code': '97',
      'client-type': 'pwa',
      'country-code': 'IN',
      'device-timezone': 'Asia/Kolkata',
      'app-user-id': appUserId?.USER_CLAIM?.userId,
      ...(token && { token }),
    },
    ...(options?.method === 'POST' && { body: JSON.stringify(options.body) }),
  });

  if (resp?.status <= 300) {
    return {
      status: resp?.status,
      statusText: resp?.statusText,
      data: await resp?.json(),
    };
  } else {
    return {
      status: resp?.status,
      statusText: resp?.statusText,
    };
  }
};

export default fetcher;
