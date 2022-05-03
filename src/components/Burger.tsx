import { FC, useState, CSSProperties } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../../styles/header.module.scss';

import { navigation } from '../data/navigation';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Burger: FC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const showMenu = {
    opacity: '1',
    visibility: 'visible',
    right: '15px',
    transition: '0.3s ease-out',
  } as CSSProperties;

  const { pathname } = useRouter();

  return (
    <div className={styles.header__burger}>
      <div className={styles.header__burgerBtnIcon} onClick={() => setIsShowMenu(!isShowMenu)}>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.header__burgerIcon}
          style={isShowMenu ? { transform: 'rotate(90deg)' } : null}
        />
      </div>
      <nav className={styles.header__burgerMenu} style={isShowMenu ? showMenu : null}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a
              className={
                pathname === path
                  ? `${styles.header__burgerMenuItem} ${styles.activeSmall}`
                  : styles.header__burgerMenuItem
              }
            >
              {title}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Burger;
