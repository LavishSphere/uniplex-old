import React from 'react';
import styles from './page.module.css';

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.heading}>Welcome to Uniplex Incorporated!</h1>
      </div>

      <div className={styles.adContainer}>
        {/* Ad iframe */}
        <iframe
          title="Advertisement"
          data-aa="2230219"
          src="//acceptable.a-ads.com/2230219"
          style={{
            border: '0',
            padding: '0',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            backgroundColor: 'transparent',
          }}
        ></iframe>
      </div>

      <div className={styles.grid}>
        <Card
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          title="Wiki"
          description="Find in-depth information about Uniplex features and guides."
        />

        <Card
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          title="Policy"
          description="Check out our privacy policy for our website!"
        />

        <Card
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          title="Terms"
          description="Check our terms of service."
        />

        <Card
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          title="Mailing List"
          description="Join our mailing list for the latest updates to our site."
        />
      </div>
    </main>
  );
};

const Card = ({ href, title, description }) => {
  return (
    <a
      href={href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title} <span>&rarr;</span></h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </a>
  );
};

export default Page;
