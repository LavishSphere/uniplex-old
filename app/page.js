import React from 'react';
import styles from './page.module.css';

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.logoContainer}>
        <a href="https://uniplex.xyz">
          <img src="https://i.ibb.co/zSB2WpZ/logo.png" alt="Minecraft Logo" className={styles.logo} />
        </a>
        <h1 className={styles.logoText}>Uniplex</h1>
      </div>

      <div className={styles.grid}>
        <Card
          href="wiki.uniplex.xyz"
          title="Wiki"
          description="Find in-depth information about Uniplex features and guides."
        />

        <Card
          href="/policy"
          title="Policy"
          description="Check out our privacy policy for our website!"
        />

        <Card
          href="/terms"
          title="Terms"
          description="Check our terms of service."
        />

        <Card
          href="an"
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
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </a>
  );
};

export default Page;
