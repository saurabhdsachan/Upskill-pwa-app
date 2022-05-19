import fetch from 'isomorphic-unfetch';
import toast from 'react-hot-toast';

const APIBaseUrl = process.env.NEXT_PUBLIC_BACKEND_HOST;

const fetcher = async (url, options) => {
  const resp = fetch(`${APIBaseUrl}${url}`, {
    method: options.method || 'GET',
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
      // token:
      //   'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5ODJhODhlMS02NjAyLTRmOGYtOTgyYS03ZjFmNDJkMjBjYmYiLCJpYXQiOjE2NTI2ODM5MTUsIlVTRVJfQ0xBSU0iOnsidXNlcklkIjoiOTgyYTg4ZTEtNjYwMi00ZjhmLTk4MmEtN2YxZjQyZDIwY2JmIn0sImV4cCI6MTY1Mjk0MzExNX0.x75Swleb0MJV8hIOQ6a2ZLTdjoUsWbhzDJ8LtoFPwus',
      // 'app-user-id': '982a88e1-6602-4f8f-982a-7f1f42d20cbf',
    },
    ...(options.method === 'POST' && { body: JSON.stringify(options.body) }),
  });

  toast.promise(resp, {
    loading: 'requesting',
    success: 'successfully',
    error: 'Please try again',
  });

  const respData = await resp;

  if (respData.status <= 300) {
    return {
      status: respData.status,
      statusText: respData.statusText,
      data: await respData.json(),
    };
  } else {
    return {
      status: respData.status,
      statusText: respData.statusText,
    };
  }
};

export default fetcher;
