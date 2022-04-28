import styles from '../../styles/products.module.scss';
import common from '../../styles/common.module.scss';
import Link from 'next/link';
import { FC } from 'react';

type ProductProps = {
  id: string;
  gameImg: string;
  gameName: string;
  gamePrice: number;
};

const Product: FC<ProductProps> = ({ id, gameImg, gameName, gamePrice }) => {
  return (
    <div className={styles.products__item}>
      <Link href={`/${id}`}>
        <a className={styles.products__image}>
          <img src={gameImg} alt="product" />
        </a>
      </Link>
      <Link href={`/${id}`}>
        <a className={styles.products__name}>{gameName}</a>
      </Link>
      <span className={`${styles.products__price} ${common.gamePrice}`}>{gamePrice}$</span>
      <button className={`${styles.products__button} ${common.addOrBuyProduct}`}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
