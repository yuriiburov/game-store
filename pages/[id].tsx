import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductInfo from '../src/components/ProductInfo';
import Gallery from '../src/components/Gallery';
import MainLayout from '../src/components/MainLayout';

import styles from '../styles/product.module.scss';
import content from '../styles/content.module.scss';
import Link from 'next/link';
import Comments from '../src/components/Comments';

export const getServerSideProps = async context => {
  const { id } = context.params;
  const response = await fetch(
    `https://61c0aacf33f24c0017823540.mockapi.io/api/v1/bankUsers/${id}`
  );
  const product = await response.json();

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product },
  };
};

const Product = ({ product }) => {
  return (
    <MainLayout>
      <section className={`${content.content__product} ${styles.product}`}>
        <div className={styles.product__back}>
          <Link href="/">
            <a>
              <FontAwesomeIcon icon={faArrowLeft} className={styles.product__backIcon} />
              Back to Products
            </a>
          </Link>
        </div>
        <ProductInfo product={product} />
        <Gallery gallery={product.images} />
        <Comments comments={product.comments} />
      </section>
    </MainLayout>
  );
};

export default Product;
