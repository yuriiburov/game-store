import { FC } from 'react';
import Link from 'next/link';
import { addProductToCart } from '../gateway/productGateway';
import { IProduct } from '../../types';
import styles from '../../styles/products.module.scss';
import common from '../../styles/common.module.scss';

type ProductProps = {
  product: IProduct;
};

const Product: FC<ProductProps> = ({ product }) => {
  const { id, image, name, price } = product;

  return (
    <div className={styles.products__item}>
      <Link href={`/${id}`}>
        <a className={styles.products__image}>
          <img src={image} alt="product" />
        </a>
      </Link>
      <Link href={`/${id}`}>
        <a className={styles.products__name}>{name}</a>
      </Link>
      <span className={`${styles.products__price} ${common.gamePrice}`}>{price}$</span>
      <button
        className={`${styles.products__button} ${common.addOrBuyProduct}`}
        onClick={() => addProductToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
