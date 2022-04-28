import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import styles from '../styles/404.module.scss';

import brokenJoystick from '../public/broken-joystick.webp';
import Head from 'next/head';

const Error = () => {
  return (
    <>
      <Head>
        <title>GameStore | Not Found</title>
      </Head>
      <main className={styles.error}>
        <div className={styles.error__container}>
          <Image
            src={brokenJoystick}
            alt="broken joystick"
            className={styles.error__img}
            width={400}
            height={400}
            placeholder="blur"
          />
          <h1 className={styles.error__code}>404</h1>
          <h2 className={styles.error__text}>Something is going wrong...</h2>
          <Link href="/" className={styles.error__link}>
            Back to Main
          </Link>
        </div>
      </main>
    </>
  );
};

export default Error;
