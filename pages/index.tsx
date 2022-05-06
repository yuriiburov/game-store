import { FC, useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import MainLayout from '../src/components/MainLayout';
import Search from '../src/components/Search';
import Product from '../src/components/Product';
import Pagination from '../src/components/Pagination';
import { baseProductsUrl } from '../src/gateway/productGateway';
import { IProduct } from '../types';
import styles from '../styles/products.module.scss';
import sortedFilteredProducts from '../src/data/sortedFilteredProducts';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(baseProductsUrl);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products: data },
  };
};

type ProductsPageProps = {
  products: IProduct[];
};

const Products: FC<ProductsPageProps> = ({ products }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const itemsPerPage: number = 15;
  const [startValue, setStartValue] = useState<number>(0);
  const [lastValue, setLastValue] = useState<number>(itemsPerPage);

  const [sortBy, setSortBy] = useState<string>('new');

  const readyProducts: any[] = sortedFilteredProducts(products, searchValue, sortBy).map(
    product => <Product key={product.id} product={product} />
  );

  return (
    <MainLayout>
      <section className={`${styles.content__products} ${styles.products}`}>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} setSortBy={setSortBy} />
        <div className={styles.products__items}>
          {searchValue.length === 0 ? readyProducts.slice(startValue, lastValue) : readyProducts}
        </div>
      </section>
      {readyProducts.length >= 15 && (
        <Pagination
          products={readyProducts}
          setStartValue={setStartValue}
          setLastValue={setLastValue}
          itemsPerPage={itemsPerPage}
        />
      )}
    </MainLayout>
  );
};

export default Products;
