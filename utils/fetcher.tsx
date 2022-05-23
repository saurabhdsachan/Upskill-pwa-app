import { TOKEN } from '@utils/constants';
import console from 'console';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';

const APIBaseUrl = process.env.NEXT_PUBLIC_BACKEND_HOST;

const fetcher = async (url: string, options?: any) => {
  const token = Cookies.get(TOKEN);
  const resp = await fetch(`${APIBaseUrl}${url}`, {
    method: options?.method || 'GET',
    mode: 'cors', // cors, no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'device-id': 'f5fe6ec1-e11c-4a9c-b21e-ec5e33117418',
      'client-version': '2.1.4-dev',
      'client-version-code': '97',
      'client-type': 'pwa',
      'country-code': 'IN',
      'device-timezone': 'Asia/Kolkata',
      'app-user-id': '982a88e1-6602-4f8f-982a-7f1f42d20cbf',
      ...(token && { token }),
    },
    ...(options?.method === 'POST' && { body: JSON.stringify(options.body) }),
  });

  console.log('resp', resp);

  if (resp?.status <= 300) {
    return {
      status: resp.status,
      statusText: resp.statusText,
      data: await resp.json(),
    };
  } else {
    return {
      status: resp.status,
      statusText: resp.statusText,
    };
  }
};

export default fetcher;
