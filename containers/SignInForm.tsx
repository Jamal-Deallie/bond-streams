import SigninFields from '@/components/SignInFields';
import FormWrap from '@/components/FormWrap';

const SigninForm = () => {
  return (
    <FormWrap title={'Sign In'}>
      <SigninFields />
    </FormWrap>
  );
};

export default SigninForm;
