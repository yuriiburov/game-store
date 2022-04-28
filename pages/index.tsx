import MainLayout from '../src/components/MainLayout';
import Search from '../src/components/Search';
import Product from '../src/components/Product';
import Pagination from '../src/components/Pagination';

import styles from '../styles/products.module.scss';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { IProduct } from '../types';

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://61c0aacf33f24c0017823540.mockapi.io/api/v1/bankUsers');
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

type ProductsProps = {
  products: IProduct[];
};

const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <MainLayout>
      <section className={`${styles.content__products} ${styles.products}`}>
        <Search />
        <div className={styles.products__items}>
          {products.map(({ id, image, name, price }) => (
            <Product key={id} id={id} gameImg={image} gameName={name} gamePrice={price} />
          ))}
        </div>
        <Pagination />
      </section>
    </MainLayout>
  );
};

export default Products;
