'use client';

import { toast } from '~/hooks/use-toast';
import { Button } from '~/components/ui/button';

const SocialAuthForm = () => {
  const buttonClass =
    'bg-light-900 font-medium text-dark-200 flex-1 rounded-2 px-4 py-6 hover:bg-transparent';

  const handleSignIn = async (provider: 'github' | 'google') => {
    try {
    } catch (error) {
      console.log(error, provider);

      toast({
        title: 'Sign-in Failed',
        description:
          error instanceof Error
            ? error.message
            : 'An error occured during sign-in',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className='mt-10 flex flex-wrap gap-2.5'>
      <Button className={buttonClass} onClick={() => handleSignIn('github')}>
        <img
          src='/icons/github.svg'
          alt='Github Logo'
          width={20}
          height={20}
          className='mr-2.5 object-contain'
        />
        <span>Log in with GitHub</span>
      </Button>

      <Button className={buttonClass} onClick={() => handleSignIn('google')}>
        <img
          src='/icons/google.svg'
          alt='Google Logo'
          width={20}
          height={20}
          className='mr-2.5 object-contain'
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
