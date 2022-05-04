import { ChangeEvent, FC, useState } from 'react';
import axios from 'axios';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { deleteItem, addProductToHistory } from '../gateway/productGateway';
import { baseCartUrl } from '../gateway/productGateway';
import { ICartProduct, IHistoryProduct } from '../../types';
import styles from '../../styles/cart.module.scss';
import common from '../../styles/common.module.scss';

type CartItemProps = {
  id: string;
  productImg: string;
  productName: string;
  productPrice: number;
  pageId: string;
  setCartProducts: any;
};

const CartItem: FC<CartItemProps> = ({
  id,
  productImg,
  productName,
  productPrice,
  pageId,
  setCartProducts,
}) => {
  const [price, setPrice] = useState<number>(productPrice);
  const [amount, setAmount] = useState<string>('1');

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
    setPrice(Number(newAmount) * productPrice);
  };

  const deleteCartProduct = (id: string) => {
    deleteItem(baseCartUrl, id);
    setCartProducts((prev: ICartProduct[]) => prev.filter(product => product.id !== id));
  };

  const addHistoryProduct = () => {
    const historyProductData: IHistoryProduct = {
      id: Date.now().toString(),
      name: productName,
      image: productImg,
      pageId,
      price,
      amount: Number(amount),
    };

    addProductToHistory(historyProductData);
    deleteCartProduct(id);
  };

  return (
    <li className={styles.cart__product}>
      <Link href={`/${pageId}`}>
        <img
          src={productImg}
          alt="game picture"
          className={`${styles.cart__image} ${common.imageSquare}`}
        />
      </Link>
      <div className={styles.cart__productContainer}>
        <Link href={`/${pageId}`}>
          <a className={styles.cart__name}>{productName}</a>
        </Link>
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
        <button
          className={`${styles.cart__remove} ${common.redSquareBtn}`}
          onClick={() => deleteCartProduct(id)}
        >
          <FontAwesomeIcon icon={faTrashCan} className={styles.cart__removeIcon} />
        </button>
        <button
          className={`${styles.cart__buy} ${common.greenSquareBtn}`}
          onClick={addHistoryProduct}
        >
          Buy
        </button>
      </div>
    </li>
  );
};

export default CartItem;
