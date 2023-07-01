import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './page.module.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Uniplex - Minecraft Website</title>
        <link rel="icon" href="https://i.ibb.co/zSB2WpZ/logo.png" />
      </Head>

      <header>
        <h1>Uniplex</h1>
      </header>

      <nav>
        <ul>
          <li>
            <Link href="https://discord.com/invite/discord-link">Discord</Link>
          </li>
          <li>
            <Link href="https://www.reddit.com/r/uniplex">Reddit</Link>
          </li>
          <li>
            <Link href="https://wiki.uniplex.xyz">Wiki</Link>
          </li>
          <li>
            <Link href="/policy">Policy</Link>
          </li>
          <li>
            <Link href="/terms">Terms and Conditions</Link>
          </li>
          <li>
            <Link href="https://status.uniplex.xyz">Status</Link>
          </li>
        </ul>
      </nav>

      <main>
        {/* Ad iframe */}
        <div className={styles.adContainer}>
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
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Uniplex</p>
      </footer>
    </div>
  );
};

export default Page;
