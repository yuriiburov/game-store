import React from 'react';
import styles from '../../styles/footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__copy}>&copy;GameStore 2022</div>
    <div className={styles.footer__text}>All rights reserved</div>
  </footer>
);

export default Footer;
