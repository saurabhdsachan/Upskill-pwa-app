import fetcher from '@utils/fetcher';

export const verifyUser = async () => {
  const endpoint = '/store/v1/user/details';

  return await fetcher(endpoint, { method: 'GET' });
};
