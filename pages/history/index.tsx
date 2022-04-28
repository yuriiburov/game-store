import Search from '../../src/components/Search';
import HistoryItem from '../../src/components/HistoryItem';
import Pagination from '../../src/components/Pagination';
import MainLayout from '../../src/components/MainLayout';

import content from '../../styles/content.module.scss';
import styles from '../../styles/history.module.scss';
import cart from '../../styles/cart.module.scss';
import Head from 'next/head';

export const getStaticProps = async () => {
  const response = await fetch('https://61c0aacf33f24c0017823540.mockapi.io/api/v1/users');
  const history = await response.json();

  if (!history) {
    return {
      notFound: true,
    };
  }

  return {
    props: { history },
  };
};

const History = ({ history }) => {
  return (
    <>
      <Head>
        <title>GameStore | History</title>
      </Head>
      <MainLayout>
        <section className={`${content.content__history} ${styles.history}`}>
          <Search />
          <button className={styles.history__deleteAll}>Delete all History</button>
          <ul className={cart.cart__products}>
            {history.map(({ id, image, name, amount, price }) => (
              <HistoryItem
                key={id}
                productImg={image}
                productName={name}
                productAmount={amount}
                productPrice={price}
              />
            ))}
          </ul>
          <Pagination />
        </section>
      </MainLayout>
    </>
  );
};

export default History;
