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
import sortedFilteredProducts from '../../src/data/sortedFilteredProducts';
import { useSelector } from 'react-redux';

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
  const [history, setHistory] = useState<IHistoryProduct[]>(data);
  const [searchValue, setSearchValue] = useState<string>('');
  const { startValue, lastValue, itemsPerPage }: any = useSelector<any>(state => state.pagination);

  const [sortBy, setSortBy] = useState<string>('new');

  const readyHistory: any[] = sortedFilteredProducts(history, searchValue, sortBy).map(
    ({ id, image, name, amount, price, pageId }) => (
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
    )
  );

  return (
    <>
      <Head>
        <title>History | GameStore</title>
      </Head>
      <MainLayout>
        <section className={`${content.content__history} ${styles.history}`}>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} setSortBy={setSortBy} />
          <ul className={cart.cart__products}>
            {searchValue.length === 0 ? readyHistory.slice(startValue, lastValue) : readyHistory}
          </ul>
        </section>
        {readyHistory.length >= 15 && (
          <Pagination products={readyHistory} itemsPerPage={itemsPerPage} />
        )}
      </MainLayout>
    </>
  );
};

export default History;
