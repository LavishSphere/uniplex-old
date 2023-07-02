import React from 'react';

class EmbedPage extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }

  componentWillUnmount() {
    const script = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]');
    document.body.removeChild(script);
  }

  render() {
    return (
      <div>
        <div
          data-tf-widget="Q26PaNkG"
          data-tf-opacity="100"
          data-tf-iframe-props="title=Uniplex Mailing List Form"
          data-tf-transitive-search-params
          data-tf-medium="snippet"
          style={{ width: '100%', height: '500px' }}
        />
      </div>
    );
  }
}

export default EmbedPage;
