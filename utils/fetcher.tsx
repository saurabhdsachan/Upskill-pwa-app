import fetch from 'isomorphic-unfetch';

const fetcher = (url) =>
  fetch(url, {
    method: 'GET',
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
  }).then((res) => res.json());

export default fetcher;
