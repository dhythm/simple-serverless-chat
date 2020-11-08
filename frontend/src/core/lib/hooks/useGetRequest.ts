import { useEffect, useState } from 'react';

export const useGetRequest = <T>(url: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState<T>(null);

  useEffect(() => {
    const _f = async () => {
      try {
        const response = await fetch(url);
        setData(await response.json());
      } catch (e) {
        console.log({ e });
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    _f();
  }, []);

  return { loading, error, data };
};
