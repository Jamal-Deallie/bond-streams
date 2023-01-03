//@ts-nocheck

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export async function fetchSession() {
  const res = await fetch('/api/auth/session');
  const session = await res.json();
  if (Object.keys(session).length > 0) {
    return session;
  }
}

export function useSession({
  required,
  redirectTo = '/',
  queryConfig = {},
} = {}) {
  const router = useRouter();
  const query = useQuery(['session'], fetchSession, {
    ...queryConfig,
    onSettled(data, error) {
      if (queryConfig?.onSettled) queryConfig?.onSettled(data, error);

      if (data || !required) return;
      router.push(redirectTo);
    },
  });

  return [query.data, query.status === 'loading'];
}
