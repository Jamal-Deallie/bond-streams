import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from '@/styles/components/Fields.module.scss';
import { useRegisterMutation } from '@/src/lib/queries';

type RegisterFormProps = {
  name?: '';
  email?: '';
  password?: '';
  repeatPassword?: '';
};

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 6 characters')
    .max(20, 'Name must not exceed 20 characters'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at 8 char long'),
  repeatPassword: Yup.string()
    .required('Password is required')
    .oneOf([Yup.ref('password')], 'Passwords does not match'),
});

const RegisterForm = () => {
  const { isLoading, mutate: Register, isSuccess } = useRegisterMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormProps>({
    resolver: yupResolver(registerSchema),
  });

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const onSubmit: SubmitHandler<RegisterFormProps> = values => {
    Register({
      email: values.email as string,
      username: values.name as string,
      password: values.password as string,
      name: values.name as string,
    });
  };

  return (
    <div className={styles.container}>
      {isSuccess ? (
        <p style={{ color: 'green' }}>Registration Success</p>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.field}>
          <label>Name</label>
          <input type='text' {...register('name')} />
          {errors.name ? (
            <p style={{ color: 'red' }}>{errors.name?.message}</p>
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
