import React from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push('https://coldkigbjjv.typeform.com/to/Q26PaNkG');
  }, []);

  return null;
};

export const getServerSideProps = () => {
  return {
    props: {},
  };
};

export default RedirectPage;
