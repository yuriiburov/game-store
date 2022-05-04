import { FC } from 'react';
import Link from 'next/link';
import { baseHistoryUrl, deleteItem } from '../gateway/productGateway';
import { IHistoryProduct } from '../../types';
import styles from '../../styles/history.module.scss';
import cart from '../../styles/cart.module.scss';
import common from '../../styles/common.module.scss';

type HistoryItemProps = {
  id: string;
  productImg: string;
  productName: string;
  productAmount: number;
  productPrice: number | string;
  pageId: string;
  setHistory: Function;
};

const HistoryItem: FC<HistoryItemProps> = ({
  id,
  productImg,
  productName,
  productAmount,
  productPrice,
  pageId,
  setHistory,
}) => {
  const deleteHistoryProduct = (productId: string) => {
    deleteItem(baseHistoryUrl, productId);
    setHistory((prev: IHistoryProduct[]) => prev.filter(product => product.id !== productId));
  };

  return (
    <li className={cart.cart__product}>
      <Link href={`/${pageId}`}>
        <img
          src={productImg}
          alt="game picture"
          className={`${cart.cart__image} ${common.imageSquare}`}
        />
      </Link>
      <div className={cart.cart__productContainer}>
        <Link href={`/${pageId}`}>
          <a className={cart.cart__name}>{productName}</a>
        </Link>
        <span className={styles.history__amount}>Amount: {productAmount}</span>
      </div>
      <span className={cart.cart__price}>{productPrice}$</span>
      <a className={styles.history__delete} onClick={() => deleteHistoryProduct(id)}>
        Delete from History
      </a>
    </li>
  );
};

export default HistoryItem;
