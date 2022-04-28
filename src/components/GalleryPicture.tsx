import { FC } from 'react';
import styles from '../../styles/gallery.module.scss';

type GalleryPictureProps = {
  style?: string;
  url: string;
};

const GalleryPicture: FC<GalleryPictureProps> = ({ style = '', url }) => {
  return (
    <div className={`${styles.gallery__item} ${style}`}>
      <img src={url} alt="game picture" />
    </div>
  );
};

export default GalleryPicture;
