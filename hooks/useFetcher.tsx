import fetcher from '@utils/fetcher';
import useSWR from 'swr';

export default function useFetcher({ endpoint }) {
  const { data, mutate, error } = useSWR(endpoint, fetcher);

  const loading = !data && !error;

  return {
    loading,
    data,
    error,
    mutate,
  };
}
