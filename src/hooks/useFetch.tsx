import {UseSessionOptions} from 'next-auth/react';
import {useEffect, useState} from 'react';

type Props = {
  service: (param?: any) => Promise<any>;
  status?: 'authenticated' | 'unauthenticated' | 'loading';
};

export default function useFetch<T>({service, status}: Props) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'authenticated') {
      service().then((data) => {
        setData(data);
        setLoading(false);
      });
    }
    if (!status) {
      service().then((data) => {
        setData(data);
        setLoading(false);
      });
    }
  }, [status]);
  return {data, isLoading};
}
