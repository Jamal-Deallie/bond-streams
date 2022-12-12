import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from '@/styles/components/fields.module.scss';
import Spinner from '@/components/Spinner';
import { useRegisterMutation } from '@/src/graphql/generated/global/graphql';
import graphqlRequestClient from '@/src/lib/graphqlRequestClient';

type RegisterFormProps = {
  username?: '';
  email?: '';
  password?: '';
  repeatPassword?: '';
};

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters')
    .max(20, 'Username must not exceed 20 characters'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at 8 char long'),
  repeatPassword: Yup.string()
    .required('Password is required')
    .oneOf([Yup.ref('password')], 'Passwords does not match'),
});

const RegisterForm = () => {
  const { mutate: Register, isLoading } = useRegisterMutation<Error>(
    graphqlRequestClient,
    {}
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<RegisterFormProps>({
    resolver: yupResolver(registerSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmit: SubmitHandler<RegisterFormProps> = values => {
    Register({
      email: values.email as string,
      username: values.username as string,
      password: values.password as string,
    });
  };

  return (
    <div className={styles.container}>
      {isSubmitSuccessful ? <p>Registration Success</p> : null}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.field}>
          <label> User Name</label>
          <input type='text' {...register('username')} />
          {errors.username ? (
            <p style={{ color: 'red' }}>{errors.username?.message}</p>
          ) : null}
        </div>
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

        <div className={styles.field}>
          <label> Repeat Password</label>
          <input type='password' {...register('repeatPassword')} />
          {errors.repeatPassword ? (
            <p>{errors.repeatPassword.message}</p>
          ) : null}
        </div>

        <button type='submit'>
          {isLoading ? <span>Submitting...</span> : <span>Submit</span>}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
