import { useEffect } from 'react';
import { useLocation } from 'react-router';

const useDocumentTitle = () => {
  const { pathname } = useLocation();

  const transformedTitle =
    pathname === '/'
      ? 'Home'
      : pathname
          .split('/')
          .filter(Boolean)
          .pop()
          ?.replace(/-/g, ' ')
          ?.replace(/^\w/, (c) => c.toUpperCase());

  const title = `CrystalCall | ${transformedTitle}`;

  useEffect(() => {
    const prevTitle = document.title;

    document.title = title;

    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

export default useDocumentTitle;
