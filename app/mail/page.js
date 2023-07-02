import React from 'react';

const RedirectPage = () => {
  return null;
};

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://coldkigbjjv.typeform.com/to/Q26PaNkG',
      permanent: false,
    },
  };
}

export default RedirectPage;
