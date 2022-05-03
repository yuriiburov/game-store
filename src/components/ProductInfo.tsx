import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../styles/product.module.scss';
import common from '../../styles/common.module.scss';
import { IProduct } from '../../types';
import { FC } from 'react';
import { addProductToCart } from '../gateway/productGateway';

type ProductInfoProps = {
  product: IProduct;
};

const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
  const {
    name,
    description,
    platforms,
    release,
    publisher,
    genre,
    voice,
    screen,
    legalInfo,
    price,
    image,
  } = product || {};

  return (
    <>
      <section className={styles.product__section}>
        <img
          src={image}
          alt="main image"
          className={`${styles.product__image} ${common.imageSquare}`}
        />
        <div className={styles.product__view}>
          <h1 className={styles.product__name}>{name}</h1>
          <div className={styles.product__info}>
            <aside className={`${styles.product__infoMain} ${styles.products__infoItem}`}>
              <b>Platforms:</b>
              <span className={`${styles.product__platform} ${styles.products__infoItem}`}>
                {platforms}
              </span>
              <b>Release Date:</b>
              <span className={`${styles.product__date} ${styles.products__infoItem}`}>
                {release}
              </span>
              <b>Publisher:</b>
              <span className={`${styles.product__company} ${styles.products__infoItem}`}>
                {publisher}
              </span>
              <b>Genre:</b>
              <span className={`${styles.product__genre} ${styles.products__infoItem}`}>
                {genre}
              </span>
              <b>Voice language:</b>
              <span className={`${styles.product__voiceLang} ${styles.products__infoItem}`}>
                {voice}
              </span>
              <b>Text languages:</b>
              <span className={`${styles.product__textLang} ${styles.products__infoItem}`}>
                {screen}
              </span>
            </aside>
            <aside className={styles.product__infoAdditional}>{legalInfo}</aside>
          </div>
          <span className={`${styles.product__price} ${common.gamePrice}`}>{price}$</span>
          <button
            className={`${styles.product__add} ${common.addOrBuyProduct}`}
            onClick={() => addProductToCart(product)}
          >
            Add to Cart
          </button>
          <label htmlFor="comment" className={styles.product__commentGo}>
            To Comment <FontAwesomeIcon icon={faPencil} className={styles.product__commentGoIcon} />
          </label>
        </div>
      </section>
      <h2 className={styles.product__title}>Game Information</h2>
      <p className={styles.product__description}>{description}</p>
    </>
  );
};

export default ProductInfo;
