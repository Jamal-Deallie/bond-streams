import { useEffect } from 'react';
import styles from '@/styles/components/signUpForm.module.scss';
import { useForm, SubmitHandler, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Props = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().required('Email is required').email('Email is invalid'),
  message: yup.string().required('Message is required'),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isDirty, isSubmitSuccessful },
  } = useForm<Props>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<Props> = async data => {
    await fetch('/api/email', {
      method: 'post',
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
    }
  }, [formState.isSubmitSuccessful, reset]);

  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <h1>Create a password to start your membership</h1>
        <div className={styles.wrap}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.grid}>
            <div>
              <div className={styles.input}>
                <input
                  type='text'
                  placeholder='First Name'
                  {...register('firstName')}
                />
              </div>
              {errors.firstName && (
                <p className={styles.error}>{errors.firstName.message}</p>
              )}
            </div>

            <div className={styles.input}>
              <div>
                <input
                  type='text'
                  placeholder='Last Name'
                  {...register('lastName')}
                />
              </div>
              {errors.lastName && (
                <p className={styles.error}>{errors.lastName.message}</p>
              )}
            </div>

            <div className={styles.input}>
              <div>
                <input
                  type='email'
                  placeholder='Email'
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
            </div>

            <div>
              <div>
                <textarea
                  className={styles.message}
                  placeholder='Message'
                  {...register('message')}></textarea>
              </div>
              {errors.message && (
                <p className={styles.error}>{errors.message.message}</p>
              )}
            </div>

            <button type='submit' className={styles.btn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
