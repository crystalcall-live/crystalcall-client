import { Suspense, lazy } from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router';
import RootLayout from './pages/protected/layout';
import { ROUTES } from './constants/routes';
import AuthLayout from './pages/auth/layout';

const SigninPage = lazy(() => import('./pages/auth/signin'));
const SignupPage = lazy(() => import('./pages/auth/signup'));
const HomePage = lazy(() => import('./pages/protected/home'));
const AboutPage = lazy(() => import('./pages/protected/about'));

const RoutesComponent = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path={ROUTES.SIGN_IN} element={<SigninPage />} />
      <Route path={ROUTES.SIGN_UP} element={<SignupPage />} />
    </Route>
    <Route path='' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
    </Route>
  </Routes>
);

const RoutesContainer = () => {
  return (
    <Suspense>
      <RoutesComponent />
    </Suspense>
  );
};

export default RoutesContainer;
