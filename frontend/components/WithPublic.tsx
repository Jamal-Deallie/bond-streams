import { useRouter } from 'next/router';
import { useSession } from '@/src/lib/next-auth-react-query';
import AccessDenied from '@/components/AccessDenied';
type WithProtected = {
  children?: any;
};

export default function WithProtected({ children }: WithProtected) {
  const [status, loading] = useSession();

  if (!status && !loading) {
    return <AccessDenied />;
  } else if (!status?.user && loading) {
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(20, 20, 20, 1)',
        }}
      />
    );
  } else if (status?.user) {
    return <>{children}</>;
  }

  return null;
}
