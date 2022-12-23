import RegisterFields from '@/components/RegisterFields';
import FormWrap from '@/components/FormWrap';


const RegisterForm = () => {
  return (
    <FormWrap title={'Create An Account'}>
      <RegisterFields />
    </FormWrap>
  );
};

export default RegisterForm;
