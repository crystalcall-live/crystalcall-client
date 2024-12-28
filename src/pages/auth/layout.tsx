import { Link, Outlet } from 'react-router';

export default function AuthLayout() {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <section className='light-border bg-light-800 rounded-[10px] border px-4 py-10 shadow-md w-[520px] sm:px-8'>
        <div className='flex items-center justify-between gap-2'>
          <div className='space-y-2.5'>
            <h1 className='text-2xl font-bold text-dark-900'>Create your account</h1>
            <p className='text-dark-500'>
             to continue to DevFlow
            </p>
          </div>
          <Link to='/' className='flex items-center gap-1'>
            <p className='text-lg font-bold font-space-grotesk max-sm:hidden'>
              Logo
            </p>
          </Link>
        </div>
        <Outlet />
      </section>
    </main>
  );
}
