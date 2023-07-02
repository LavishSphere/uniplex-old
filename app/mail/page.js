import React from 'react';

const RedirectPage = () => {
  return (
    <div>
      Redirecting...
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.location.href = 'https://coldkigbjjv.typeform.com/to/Q26PaNkG';
          `,
        }}
      />
    </div>
  );
};

export default RedirectPage;
