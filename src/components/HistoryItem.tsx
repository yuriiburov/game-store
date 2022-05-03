import axios from 'axios';

import { FC } from 'react';
import styles from '../../styles/history.module.scss';
import cart from '../../styles/cart.module.scss';
import common from '../../styles/common.module.scss';
import Link from 'next/link';
import { baseHistoryUrl, deleteFromHistory } from '../gateway/productGateway';

type HistoryItemProps = {
  id: string;
  productImg: string;
  productName: string;
  productAmount: number;
  productPrice: number;
  pageId: string;
  setHistory: any;
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
  const deleteHistoryProduct = async (id: string) => {
    const { data } = await axios.delete(`${baseHistoryUrl}/${id}`);
    setHistory(prev => prev.filter(product => product.id !== id));
    console.log(data);
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
