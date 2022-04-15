import {useEffect, useState} from 'react';

type Props = {
  service: (param?: any) => Promise<any>;
};

export default function useFetch<T>({service}: Props) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    service().then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);
  return {data, isLoading};
}
