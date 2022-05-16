import fetcher from '@utils/fetcher';
import useSWR from 'swr';

export default function useUser() {
  const { data, mutate, error } = useSWR('api_user', () =>
    fetcher({
      url: 'http://proxy.backend.dev.oneclub.live/store/v1/user/details/others?userId=55e6b80a-726b-430b-9988-52bc68c464e5',
    })
  );

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
}
