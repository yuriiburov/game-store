import { FC } from 'react';
import GalleryPicture from './GalleryPicture';
import styles from '../../styles/gallery.module.scss';
import productStyles from '../../styles/product.module.scss';

type GalleryProps = {
  gallery: string;
};

const Gallery: FC<GalleryProps> = ({ gallery }) => {
  const arrayOfImages = gallery && gallery.split(' ');

  const newGallery =
    gallery &&
    arrayOfImages.map((url, i) =>
      i === 0 || i === 10 || i === 14 ? (
        <GalleryPicture key={i} url={url} style={styles.gallery__item_big} />
      ) : (
        <GalleryPicture key={i} url={url} />
      )
    );

  return (
    <section className={`${productStyles.product__gallery} ${styles.gallery}`}>
      <div className={styles.gallery__items}>{newGallery}</div>
    </section>
  );
};

export default Gallery;
