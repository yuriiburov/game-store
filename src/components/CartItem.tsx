import { FC, useState } from 'react';

import styles from '../../styles/cart.module.scss';
import common from '../../styles/common.module.scss';

import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type CartItemProps = {
  productImg: string;
  productName: string;
  productPrice: number;
};

const CartItem: FC<CartItemProps> = ({ productImg, productName, productPrice }) => {
  const [price, setPrice] = useState(productPrice);
  const [amount, setAmount] = useState('1');

  const handleAmountChange = e => {
    const newAmount = e.target.value;
    setAmount(newAmount);
    setPrice(Number(newAmount) * productPrice);
  };

  return (
    <li className={styles.cart__product}>
      <img
        src={productImg}
        alt="game picture"
        className={`${styles.cart__image} ${common.imageSquare}`}
      />
      <div className={styles.cart__productContainer}>
        <a className={styles.cart__name}>{productName}</a>
        <label className={styles.cart__amount}>
          Amount{' '}
          <input
            type="number"
            min="1"
            className={styles.cart__amountInput}
            value={amount}
            onChange={handleAmountChange}
          />
        </label>
      </div>
      <span className={styles.cart__price}>{price}$</span>
      <div className={styles.cart__buttons}>
        <button className={`${styles.cart__remove} ${common.redSquareBtn}`}>
          <FontAwesomeIcon icon={faTrashCan} className={styles.cart__removeIcon} />
        </button>
        <button className={`${styles.cart__buy} ${common.greenSquareBtn}`}>Buy</button>
      </div>
    </li>
  );
};

export default CartItem;
