import { useEffect, } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '@/src/lib/next-auth-react-query';

type WithPublicProps = {
  WrappedComponent: any;
};

export default function WithPublic({ WrappedComponent }: WithPublicProps) {
  return (props: JSX.IntrinsicAttributes) => {
    const router = useRouter();
    const [status, loading] = useSession();

    useEffect(() => {
      if (!!status) {
        router.replace('/browse');
      }
    }, [status]);

    if (status || loading) {
      return <h1>Loading here!</h1>;
    }

    return <WrappedComponent {...props} />;
  };
}
