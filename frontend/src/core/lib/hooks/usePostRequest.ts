import Axios from 'axios';
import { useEffect, useState } from 'react';

export const usePostRequest = <T>(url: string, postParam?: any) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState<T>(null);

  useEffect(() => {
    const _f = async () => {
      try {
        const response = await Axios.post(url, postParam);
        setData(response.data);
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
