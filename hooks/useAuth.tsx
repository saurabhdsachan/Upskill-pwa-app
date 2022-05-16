import fetcher from '@utils/fetcher';
import useSWR from 'swr';

export default function useAuth() {
  const { data, mutate, error } = useSWR(
    'http://proxy.backend.dev.oneclub.live/store/v1/user/details/others?username=srb',
    fetcher
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
