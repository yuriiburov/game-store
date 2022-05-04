import { FC, useState } from 'react';
import axios from 'axios';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Search from '../../src/components/Search';
import HistoryItem from '../../src/components/HistoryItem';
import Pagination from '../../src/components/Pagination';
import MainLayout from '../../src/components/MainLayout';
import { baseHistoryUrl } from '../../src/gateway/productGateway';
import { IHistoryProduct } from '../../types';
import styles from '../../styles/history.module.scss';
import content from '../../styles/content.module.scss';
import cart from '../../styles/cart.module.scss';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(baseHistoryUrl);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};

type HistoryPageProps = {
  data: IHistoryProduct[];
};

const History: FC<HistoryPageProps> = ({ data }) => {
  const itemsPerPage: number = 15;
  const [history, setHistory] = useState<IHistoryProduct[]>(data);
  const [startValue, setStartValue] = useState<number>(0);
  const [lastValue, setLastValue] = useState<number>(itemsPerPage);

  return (
    <>
      <Head>
        <title>History | GameStore</title>
      </Head>
      <MainLayout>
        <section className={`${content.content__history} ${styles.history}`}>
          <Search />
          <ul className={cart.cart__products}>
            {history
              .slice(startValue, lastValue)
              .map(({ id, image, name, amount, price, pageId }) => (
                <HistoryItem
                  key={id}
                  id={id}
                  productImg={image}
                  productName={name}
                  productAmount={amount}
                  productPrice={price}
                  pageId={pageId}
                  setHistory={setHistory}
                />
              ))}
          </ul>
        </section>
        <Pagination
          products={history}
          setStartValue={setStartValue}
          setLastValue={setLastValue}
          itemsPerPage={itemsPerPage}
        />
      </MainLayout>
    </>
  );
};

export default History;
