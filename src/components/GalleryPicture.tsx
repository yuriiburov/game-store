import styles from '../../styles/gallery.module.scss';

const GalleryPicture = ({ style = '', url }) => {
  return (
    <div className={`${styles.gallery__item} ${style}`}>
      <img src={url} alt="game picture" />
    </div>
  );
};

export default GalleryPicture;
