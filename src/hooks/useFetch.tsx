import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

type Props = {
  service: (param?: any) => Promise<any>;
  status?: 'authenticated' | 'unauthenticated' | 'loading';
  options?: {
    trigger: 'onQueryChange' | 'onRouterIsReady';
  };
};

export default function useFetch<T>({service, status, options}: Props) {
  const router = useRouter();
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!options && status === 'authenticated') {
      service().then((data) => {
        setData(data);
        setLoading(false);
      });
    }
    if (!options && !status) {
      service().then((data) => {
        setData(data);
        setLoading(false);
      });
    }
  }, [status]);

  useEffect(() => {
    if (router.isReady && options?.trigger === 'onQueryChange') {
      setLoading(true);
      service().then((data) => {
        setData(data);
        setLoading(false);
      });
    }
  }, [router.query, router.isReady]);

  useEffect(() => {
    if (router.isReady && options?.trigger === 'onRouterIsReady') {
      setLoading(true);
      service().then((data) => {
        setData(data);
        setLoading(false);
      });
    }
  }, [router.isReady]);

  return {data, isLoading};
}
