import { Outlet } from 'react-router';
import NavBar from '~/components/navigation';

export default function RootLayout() {
  return (
    <main className='flex flex-col'>
      <NavBar />
      <section className='flex-1 p-6 sm:px-12'>
        <Outlet />
      </section>
    </main>
  );
}
