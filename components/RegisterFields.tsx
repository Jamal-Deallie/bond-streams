import { useEffect } from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { DynamicFieldData } from '@/typings/dynamic-control-types';
import { DynamicControl } from './DynamicControl';
import { ErrorMessage } from '@hookform/error-message';
import styles from '@/styles/components/form.module.scss';

interface FormProps {
  fields: DynamicFieldData[];
}

interface FormData {
  name?: string;
  age?: number;
  address: string;
  language?: string;
  username?: '';
  email?: '';
  password?: '';
  repeatPassword?: '';
  privacyPolicy?: false;
  newsletterSubscription?: false;
  errors: keyof FormProps;
}

const RegisterForm = ({ fields }: FormProps) => {
  const formMethods = useForm<FormData>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      privacyPolicy: false,
      newsletterSubscription: false,
    },
  });

  const {
    reset,
    handleSubmit,
    formState,
    formState: { isSubmitting, errors },
  } = formMethods;

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
        privacyPolicy: false,
        newsletterSubscription: false,
      });
    }
  }, [formState.isSubmitSuccessful, reset]);

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

  const onSubmit = handleSubmit(data => {
    console.log(JSON.stringify(data));
    console.log('submitting...');
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

export default RegisterForm;
