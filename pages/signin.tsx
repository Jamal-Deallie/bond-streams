import { useEffect } from 'react';
import SigninForm from '@/containers/SignInForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Signin = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  
  useEffect(() => {
    if (status === 'authenticated') {
      if (session) {
        console.log('session = true');
        router.push('/browse');
      }
    }
  }, [router, session, status]);

  return (
    <main>
      <SigninForm />
    </main>
  );
};

export default Signin;
