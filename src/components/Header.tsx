import { useRouter } from 'next/router';
import Link from 'next/link';

import Burger from './Burger';

import { navigation } from '../data/navigation';

import styles from '../../styles/header.module.scss';
import { FC } from 'react';

const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.header__title}>
        <a href="" className={styles.header__logo}>
          &#127918; GameStore
        </a>
      </div>
      <nav className={styles.header__menu}>
        <div className={styles.header__list}>
          {navigation.map(({ id, title, path }) => (
            <Link key={id} href={path}>
              <a
                className={
                  pathname === path
                    ? `${styles.active} ${styles.header__link}`
                    : styles.header__link
                }
              >
                {title}
              </a>
            </Link>
          ))}
        </div>
        <Burger />
      </nav>
    </header>
  );
};

export default Header;
