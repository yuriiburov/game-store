import { FC, useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import MainLayout from '../src/components/MainLayout';
import Search from '../src/components/Search';
import Product from '../src/components/Product';
import Pagination from '../src/components/Pagination';
import { baseProductsUrl } from '../src/gateway/productGateway';
import { IProduct } from '../types';
import styles from '../styles/products.module.scss';

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
  const itemsPerPage: number = 15;
  const [searchValue, setSearchValue] = useState<string>('');
  const [startValue, setStartValue] = useState<number>(0);
  const [lastValue, setLastValue] = useState<number>(itemsPerPage);

  return (
    <MainLayout>
      <section className={`${styles.content__products} ${styles.products}`}>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className={styles.products__items}>
          {products.slice(startValue, lastValue).map((product, i, array) => {
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
      <Pagination
        products={products}
        setStartValue={setStartValue}
        setLastValue={setLastValue}
        itemsPerPage={itemsPerPage}
      />
    </MainLayout>
  );
};

export default Products;
