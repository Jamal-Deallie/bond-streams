import { ReactNode, useCallback } from 'react';
import { signIn, getProviders, signOut, useSession } from 'next-auth/react';
import styles from '@/styles/containers/signinForm.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface SignInProps {
  title?: string;
  children?: ReactNode;
}
const FormWrap = ({ title, children }: SignInProps) => {
  const { asPath } = useRouter();
  const { data: session, status } = useSession();

  const handleGoogleSignIn = async () => {
    await signIn('google', {
      callbackUrl: '/browse',
    });
  };

  const link = useCallback(() => {
    if (asPath === '/signin') {
      return (
        <div className={styles.link}>
          <Link href='/register'>
            <span>{"Don't"} have an account? </span>
            <span>Sign up</span>
          </Link>
        </div>
      );
    } else if (asPath === '/register') {
      return (
        <div className={styles.link}>
          <Link href='/signin'>
            <span>Already have an account?</span>
            <span>Sign In</span>
          </Link>
        </div>
      );
    } else return;
  }, [asPath]);

  const googleBtn = useCallback(() => {
    if (asPath === '/signin') {
      return (
        <div className={styles.google}>
          {/* <a
            href={`/api/auth/signin`}
            className={styles.buttonPrimary}
            onClick={e => {
              e.preventDefault();
              signIn();
            }}>
            Sign in
          </a> */}
          <button onClick={() => handleGoogleSignIn()}>
            <Image
              alt='google logo'
              src='https://res.cloudinary.com/dp5qjsiff/image/upload/v1669095734/Bond/G__Logo_ukcp5g.svg'
              width='20'
              height='20'
            />
            <span>Sign in with Google</span>
          </button>
          <div className={styles.divider}>
            <div>
              <span>or</span>
            </div>
          </div>
        </div>
      );
    } else if (asPath === '/register') {
      return (
        <div className={styles.google}>
          <button>
            <Image
              alt='google logo'
              src='https://res.cloudinary.com/dp5qjsiff/image/upload/v1669095734/Bond/G__Logo_ukcp5g.svg'
              width='20'
              height='20'
            />
            <span>Sign up with Google</span>
          </button>
          <div className={styles.divider}>
            <div>
              <span>or</span>
            </div>
          </div>
        </div>
      );
    } else return;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1>{title}</h1>
          </div>
          {googleBtn()}
          {children}
          {link()}
        </div>
      </div>
    </div>
  );
};

export default FormWrap;
