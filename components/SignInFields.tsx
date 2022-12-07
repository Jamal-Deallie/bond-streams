import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { SignInData } from 'types/typings';
import { DynamicFieldData } from '@/typings/dynamic-control-types';
import { DynamicControl } from '@/components/DynamicControl';
import { ErrorMessage } from '@hookform/error-message';
import { useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import styles from '@/styles/components/form.module.scss';

interface FormProps {
  fields: DynamicFieldData[];
}

const SigninForm = ({ fields }: FormProps) => {
  const formMethods = useForm<SignInData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    reset,
    handleSubmit,
    formState,
    formState: { isSubmitting, errors },
  } = formMethods;

  // const onSubmit = async () => {
  //   try {
  //     const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         username: 'jamalS',
  //         email: 'deat@gmail.com',
  //         password: '123456678',
  //         repeatPassword: '123456678',
  //       }),
  //     };
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
  //       requestOptions
  //     );
  //     const data = await response.json();
  //    
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        email: '',
        password: '',
      });
    }
  }, [formState.isSubmitSuccessful, reset]);

  const onSubmit = handleSubmit(async data => {


    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

  });

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <FormProvider {...formMethods}>
        {fields.map((d, i) => (
          <div key={i} className={styles.outer}>
            <label htmlFor={d.fieldName}>{d.label}</label>

            <DynamicControl {...d} />

            <ErrorMessage
              errors={errors}
              //@ts-ignore
              name={d.fieldName}
              render={({ message }) => <p>{message}</p>}
            />
          </div>
        ))}
      </FormProvider>
      <div className={styles.button}>
        <button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default SigninForm;
