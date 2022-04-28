import Search from '../../src/components/Search';
import CartItem from '../../src/components/CartItem';
import Pagination from '../../src/components/Pagination';
import MainLayout from '../../src/components/MainLayout';

import styles from '../../styles/cart.module.scss';
import content from '../../styles/cart.module.scss';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { ICartProduct } from '../../types';

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://61c0aacf33f24c0017823540.mockapi.io/api/v1/tasks');
  const cart = await response.json();

  if (!cart) {
    return {
      notFound: true,
    };
  }

  return {
    props: { cart },
  };
};

type CartProps = {
  cart: ICartProduct[];
};

const Cart: FC<CartProps> = ({ cart }) => {
  return (
    <>
      <Head>
        <title>GameStore | Cart</title>
      </Head>
      <MainLayout>
        <section className={`${content.content__cart} ${styles.cart}`}>
          <Search />
          <ul className={styles.cart__products}>
            {cart.map(({ id, image, name, price }) => (
              <CartItem key={id} productImg={image} productName={name} productPrice={price} />
            ))}
          </ul>
          <Pagination />
        </section>
      </MainLayout>
    </>
  );
};

export default Cart;
