import { page } from '@utils/config';
import fetch from 'isomorphic-unfetch';
import { GetServerSidePropsContext, NextPageContext } from 'next';

interface FetcherArgs {
  endPoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  type?: string;
  isSocket?: boolean;
  ctx?: NextPageContext | GetServerSidePropsContext;
  body?: any;
}

const fetcher = async ({
  endPoint,
  method,
  body,
  isSocket = false,
  type = 'text',
}: FetcherArgs): Promise<Record<string, any>> => {
  const JWT = '';
  const contentType = type === 'file' ? '' : 'application/json';

  const headers = JWT ? { 'Content-Type': contentType, Authorization: JWT } : { 'Content-Type': contentType };
  const getFileBody = () => {
    const formData = new FormData();
    body.map((file) => formData.append('files', file, file.name));
    delete headers['Content-Type'];

    return formData;
  };
  const options =
    method === 'GET'
      ? {
          method,
          headers,
        }
      : {
          method,
          headers,
          body: type === 'file' ? getFileBody() : JSON.stringify(body),
        };
  const finalAPIBaseUrl = isSocket ? page.apiSocketUrl : page.apiBaseUrl;
  const response = await fetch(finalAPIBaseUrl + endPoint, options);
  if (response.status) {
    try {
      if (response.status === 204) {
        return {
          statusCode: response.status,
          status: response.statusText,
        };
      }
      if (response.status !== 401 && response.status !== 204) {
        const resData = await response.json();
        if (resData.statusCode) {
          return resData;
        }

        return { data: resData, statusCode: response.status };
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      return { statusCode: response.status };
    }
  }

  return {
    statusCode: response.status,

    status: response.statusText,
  };
};

export default fetcher;
