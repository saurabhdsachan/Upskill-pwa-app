import fetch from 'isomorphic-unfetch';

interface FetchOptions {
  url: string;
  options?: { method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'; data?: any };
}

const fetcher = ({ url, options }: FetchOptions) =>
  fetch(url, {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options.method !== 'GET' && options?.data && { body: JSON.stringify(options?.data) }),
  }).then((res) => res.json());

export default fetcher;
