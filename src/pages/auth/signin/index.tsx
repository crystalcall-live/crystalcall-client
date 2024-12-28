import AuthForm from '~/components/forms/AuthForm';
import SocialAuthForm from '~/components/forms/SocialAuthForm';
import { signInWithCredentials } from '~/lib/actions/auth.actions';
import { SignInSchema } from '~/lib/validations';

const SignIn = () => {
  return (
    <>
      <AuthForm
        formType='SIGN_IN'
        schema={SignInSchema}
        defaultValues={{ email: '', password: '' }}
        onSubmit={signInWithCredentials}
      />
      <SocialAuthForm />
    </>
  );
};

export default SignIn;
