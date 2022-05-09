import { FC } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProductToCart } from '../gateway/productGateway';
import { IProduct } from '../../types';
import styles from '../../styles/products.module.scss';
import common from '../../styles/common.module.scss';
import toastStyles from '../../styles/toast.module.scss';

type ProductProps = {
  product: IProduct;
};

toast.configure();
const Product: FC<ProductProps> = ({ product }) => {
  const { id, image, name, price } = product;

  const notify = (message: string) => {
    toast(message, {
      className: toastStyles.toast,
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const showToast = async () => {
    try {
      await addProductToCart(product);
      notify('🚀 Product added to Cart');
    } catch (e) {
      notify(e);
    }
  };

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
        onClick={showToast}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
