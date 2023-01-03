import { useEffect } from 'react';
import SigninForm from '@/containers/SignInForm';
import { useSession } from '@/src/lib/next-auth-react-query';
import { useRouter } from 'next/router';

const Signin = () => {
  return <SigninForm />;
};

export default Signin;
