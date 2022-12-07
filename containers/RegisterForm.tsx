import { ReactNode, useCallback } from 'react';
import RegisterFields from '@/components/RegisterFields';
import FormWrap from '@/components/FormWrap';
import { signinFields } from '@/data/data';
import styles from '@/styles/containers/signinForm.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const RegisterForm = () => {
  return (
    <FormWrap title={'Create An Account'}>
      <RegisterFields fields={signinFields} />
    </FormWrap>
  );
};

export default RegisterForm;
