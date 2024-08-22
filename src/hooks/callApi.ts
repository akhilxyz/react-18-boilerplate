import { useState, useEffect } from 'react';

// Define the hook to accept an API function and options
export function useCallApi(apiFunction: (options: any) => Promise<any>, options: any = {}, dependencies: any[] = [], callDependencies: any[] = []) {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);


  const validateDependencies = (arr: any[]) => {
    return arr.some(item => item === null || item === undefined || item === '' || item === false);
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await apiFunction(options);
        setResponse(result);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    if (!validateDependencies(callDependencies)) {
      fetchData();
    }
  }, [apiFunction, ...dependencies]);

  return { response, error, loading };
}
