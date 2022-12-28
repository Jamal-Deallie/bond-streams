import { useEffect } from 'react';
import SigninForm from '@/containers/SignInForm';
import { useSession } from '@/src/lib/next-auth-react-query';
import { useRouter } from 'next/router';

const Signin = () => {
  // const [session, loading] = useSession({
  //   required: true,
  //   redirectTo: 'http://localhost:3000',

  // });
  const router = useRouter();

  // useEffect(() => {
  //   if (status === 'authenticated') {
  //     if (session) {
  //       console.log('session = true');
  //       router.push('/browse');
  //     }
  //   }
  // }, [router, session, status]);

  return (
    <>
      <SigninForm />
    </>
  );
};

export default Signin;
