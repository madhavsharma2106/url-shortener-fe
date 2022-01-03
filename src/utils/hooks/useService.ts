import { useState } from 'react';

export const useService = (service: any) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);

  const exectue = async (args: any) => {
    setLoading(true);
    setError(null);
    setResponse(null);
    return new Promise(async (resolve, reject) => {
      try {
        const response = await service(args);
        resolve(response);
        setResponse(response);
      } catch (err) {
        reject(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    });
  };

  return { exectue, response, error, loading };
};
