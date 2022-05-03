import axios from 'axios';

import Search from '../../src/components/Search';
import CartItem from '../../src/components/CartItem';
import Pagination from '../../src/components/Pagination';
import MainLayout from '../../src/components/MainLayout';

import styles from '../../styles/cart.module.scss';
import content from '../../styles/cart.module.scss';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { FC, useState } from 'react';
import { ICartProduct } from '../../types';
import { baseCartUrl } from '../../src/gateway/productGateway';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(baseCartUrl);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};

type CartPageProps = {
  data: ICartProduct[];
};

const Cart: FC<CartPageProps> = ({ data }) => {
  const [cartProducts, setCartProducts] = useState(data);

  return (
    <>
      <Head>
        <title>Cart | GameStore</title>
      </Head>
      <MainLayout>
        <section className={`${content.content__cart} ${styles.cart}`}>
          <Search />
          <ul className={styles.cart__products}>
            {cartProducts.map(({ id, image, name, price, pageId }) => (
              <CartItem
                key={id}
                id={id}
                productImg={image}
                productName={name}
                productPrice={price}
                pageId={pageId}
                setCartProducts={setCartProducts}
              />
            ))}
          </ul>
          <Pagination />
        </section>
      </MainLayout>
    </>
  );
};

export default Cart;
