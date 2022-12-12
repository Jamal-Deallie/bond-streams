import { ReactNode, useCallback } from 'react';
import SigninFields from '@/components/SignInFields';
import FormWrap from '@/components/FormWrap';
import { signinFields } from '@/src/data/data';
import styles from '@/styles/containers/signinForm.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SigninForm = () => {
  return (
    <FormWrap title={'Sign In'}>
      <SigninFields fields={signinFields} />
    </FormWrap>
  );
};

export default SigninForm;
