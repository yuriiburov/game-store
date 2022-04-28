import { FC, ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

import styles from '../../styles/mainLayout.module.scss';
import content from '../../styles/content.module.scss';

type mainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<mainLayoutProps> = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>
      <section className={content.content}>{children}</section>
    </main>
    <Footer />
  </div>
);

export default MainLayout;
