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
import sortedFilteredProducts from '../../src/data/sortedFilteredProducts';
import { useSelector } from 'react-redux';

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
  const [cartProducts, setCartProducts] = useState<ICartProduct[]>(data);
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('new');

  const { startValue, lastValue, itemsPerPage }: any = useSelector<any>(state => state.pagination);

  const readyCart: any[] = sortedFilteredProducts(cartProducts, searchValue, sortBy).map(
    ({ id, image, name, price, pageId }) => (
      <CartItem
        key={id}
        id={id}
        productImg={image}
        productName={name}
        productPrice={price}
        pageId={pageId}
        setCartProducts={setCartProducts}
      />
    )
  );

  return (
    <>
      <Head>
        <title>Cart | GameStore</title>
      </Head>
      <MainLayout>
        <section className={`${content.content__cart} ${styles.cart}`}>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} setSortBy={setSortBy} />
          <ul className={styles.cart__products}>
            {searchValue.length === 0 ? readyCart.slice(startValue, lastValue) : readyCart}
          </ul>

          {readyCart.length >= 15 && (
            <Pagination products={readyCart} itemsPerPage={itemsPerPage} />
          )}
        </section>
      </MainLayout>
    </>
  );
};

export default Cart;
