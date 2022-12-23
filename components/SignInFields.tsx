import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { signIn } from 'next-auth/react';
import styles from '@/styles/components/Fields.module.scss';

type SigninFormProps = {
  email?: '';
  password?: '';
};

const signinSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at 8 char long'),
});

const SigninForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<SigninFormProps>({
    resolver: yupResolver(signinSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmit = handleSubmit(async data => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: `${window.location.origin}/browse`,
      redirect: false,
    });
    if (res?.error) alert(res.error);
    if (res?.url) router.push(res.url);
  });

  return (
    <div className={styles.container}>
      {isSubmitSuccessful ? <p>Registration Success</p> : null}
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.field}>
          <label> Email</label>
          <input type='email' {...register('email')} />
          {errors.email ? (
            <p style={{ color: 'red' }}>{errors.email?.message}</p>
          ) : null}
        </div>
        <div className={styles.field}>
          <label>Password</label>
          <input type='password' {...register('password')} />
          {errors.password ? (
            <p style={{ color: 'red' }}>{errors.password.message}</p>
          ) : null}
        </div>

        <button type='submit'>
          {/* {isSubmitting ? <span>Submitting...</span> : <span>Submit</span>} */}
          Submit
        </button>
      </form>
    </div>
  );
};

export default SigninForm;
