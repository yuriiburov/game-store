import { FC, useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import axios from 'axios';
import Search from '../../src/components/Search';
import CartItem from '../../src/components/CartItem';
import MainLayout from '../../src/components/MainLayout';
import { baseCartUrl } from '../../src/gateway/productGateway';
import { ICartProduct } from '../../types';
import styles from '../../styles/cart.module.scss';
import content from '../../styles/cart.module.scss';
import Pagination from '../../src/components/Pagination';

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
  const itemsPerPage: number = 15;
  const [cartProducts, setCartProducts] = useState<ICartProduct[]>(data);
  const [startValue, setStartValue] = useState<number>(0);
  const [lastValue, setLastValue] = useState<number>(itemsPerPage);

  return (
    <>
      <Head>
        <title>Cart | GameStore</title>
      </Head>
      <MainLayout>
        <section className={`${content.content__cart} ${styles.cart}`}>
          <Search />
          <ul className={styles.cart__products}>
            {cartProducts.slice(startValue, lastValue).map(({ id, image, name, price, pageId }) => (
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
          <Pagination
            products={cartProducts}
            setStartValue={setStartValue}
            setLastValue={setLastValue}
            itemsPerPage={itemsPerPage}
          />
        </section>
      </MainLayout>
    </>
  );
};

export default Cart;
