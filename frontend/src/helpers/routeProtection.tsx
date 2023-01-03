import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '@/src/lib/next-auth-react-query';
import Spinner from '@/components/Spinner';
type RouteProps = {
  children: ReactNode;
  protectedRoutes: string[];
};

export default function PrivateRoute({
  protectedRoutes,
  children,
}: RouteProps) {
  const router = useRouter();
  const [status, loading] = useSession();

  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;
  console.log(loading);
  useEffect(() => {
    if (!loading && !status && pathIsProtected) {
      // Redirect route, you can point this to /login
      router.push('/signin');
    }
  }, [loading, status, pathIsProtected, router]);

  if ((loading || !status) && pathIsProtected) {
    return (
      <div
        style={{
          height: 'calc(100vh - 7.5rem)',
          width: '100%',
          backgroundColor: 'rgba(20, 20, 20, 1)',
        }}>
        <Spinner />
      </div>
    );
  }

  return <>{children}</>;
}
