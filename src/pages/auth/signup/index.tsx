'use client';

import AuthForm from '~/components/forms/AuthForm';
import SocialAuthForm from '~/components/forms/SocialAuthForm';
import { signUpWithCredentials } from '~/lib/actions/auth.actions';
import { SignUpSchema } from '~/lib/validations';

const SignUp = () => {
  return (
    <>
      <AuthForm
        formType='SIGN_UP'
        schema={SignUpSchema}
        defaultValues={{firstName: '', lastName: '', email: '', password: '' }}
        onSubmit={signUpWithCredentials}
      />
      <SocialAuthForm />
    </>
  );
};

export default SignUp;
