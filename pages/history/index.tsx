import axios from 'axios';

import Search from '../../src/components/Search';
import HistoryItem from '../../src/components/HistoryItem';
import Pagination from '../../src/components/Pagination';
import MainLayout from '../../src/components/MainLayout';

import content from '../../styles/content.module.scss';
import styles from '../../styles/history.module.scss';
import cart from '../../styles/cart.module.scss';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { FC, useState } from 'react';
import { IHistoryProduct } from '../../types';
import { baseHistoryUrl } from '../../src/gateway/productGateway';

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
  const [history, setHistory] = useState(data);

  return (
    <>
      <Head>
        <title>History | GameStore</title>
      </Head>
      <MainLayout>
        <section className={`${content.content__history} ${styles.history}`}>
          <Search />
          <ul className={cart.cart__products}>
            {history.map(({ id, image, name, amount, price, pageId }) => (
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
        <Pagination />
      </MainLayout>
    </>
  );
};

export default History;
