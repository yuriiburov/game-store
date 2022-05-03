import MainLayout from '../src/components/MainLayout';
import Search from '../src/components/Search';
import Product from '../src/components/Product';
import Pagination from '../src/components/Pagination';

import styles from '../styles/products.module.scss';
import { GetStaticProps } from 'next';
import { FC, useState } from 'react';
import { IProduct } from '../types';
import { baseProductsUrl } from '../src/gateway/productGateway';

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(baseProductsUrl);
  const products = await response.json();

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products },
  };
};

type ProductsPageProps = {
  products: IProduct[];
};

const Products: FC<ProductsPageProps> = ({ products }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <MainLayout>
      <section className={`${styles.content__products} ${styles.products}`}>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className={styles.products__items}>
          {products.map(product => {
            if (
              searchValue.length >= 1 &&
              product.name.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return <Product key={product.id} product={product} />;
            } else if (searchValue.length < 1) {
              return <Product key={product.id} product={product} />;
            }
          })}
        </div>
      </section>
      <Pagination />
    </MainLayout>
  );
};

export default Products;
