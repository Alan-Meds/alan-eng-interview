import { useState } from 'react';
import { httpsCallable } from 'firebase/functions';
import { functions } from '@/lib/firebase';

export function useFirebaseFunction<TData = any, TResponse = any>(
  functionName: string
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const callFunction = async (data: TData): Promise<TResponse | null> => {
    setLoading(true);
    setError(null);
    
    try {
      const fn = httpsCallable<TData, TResponse>(functions, functionName);
      const result = await fn(data);
      return result.data;
    } catch (err) {
      setError(err as Error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { callFunction, loading, error };
}
