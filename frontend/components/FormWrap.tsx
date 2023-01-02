import { ReactNode, useCallback } from 'react';
import styles from '@/styles/containers/Form.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface FormWrapProps {
  title?: string;
  children?: ReactNode;
}
const FormWrap = ({ title, children }: FormWrapProps) => {
  const { asPath } = useRouter();

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

  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1>{title}</h1>
          </div>
          {children}
          {link()}
        </div>
      </div>
    </div>
  );
};

export default FormWrap;
