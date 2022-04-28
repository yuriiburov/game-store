import React from 'react';

import styles from '../../styles/history.module.scss';
import cart from '../../styles/cart.module.scss';
import common from '../../styles/common.module.scss';

const HistoryItem = ({ productImg, productName, productAmount, productPrice }) => {
  return (
    <li className={cart.cart__product}>
      <img
        src={productImg}
        alt="game picture"
        className={`${cart.cart__image} ${common.imageSquare}`}
      />
      <div className={cart.cart__productContainer}>
        <a href="" className={cart.cart__name}>
          {productName}
        </a>
        <span className={styles.history__amount}>Amount: {productAmount}</span>
      </div>
      <span className={cart.cart__price}>{productPrice}$</span>
      <a href="" className={styles.history__delete}>
        Delete from History
      </a>
    </li>
  );
};

export default HistoryItem;
