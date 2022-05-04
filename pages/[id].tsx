import { FC } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductInfo from '../src/components/ProductInfo';
import Gallery from '../src/components/Gallery';
import MainLayout from '../src/components/MainLayout';
import Comments from '../src/components/Comments';
import { baseProductsUrl } from '../src/gateway/productGateway';
import { IProduct } from '../types';
import styles from '../styles/product.module.scss';
import content from '../styles/content.module.scss';

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.params;
  const { data } = await axios.get(`${baseProductsUrl}/${id}`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product: data },
  };
};

type ProductPageProps = {
  product: IProduct;
};

const Product: FC<ProductPageProps> = ({ product }) => {
  const router = useRouter();

  return (
    <MainLayout>
      <Head>
        <title>{product.name} | GameStore</title>
        <meta name="description" content={product.description} />
      </Head>
      <section className={`${content.content__product} ${styles.product}`}>
        <div className={styles.product__back}>
          <a onClick={() => router.back()}>
            <FontAwesomeIcon icon={faArrowLeft} className={styles.product__backIcon} />
            Go back
          </a>
        </div>
        <ProductInfo product={product} />
        <Gallery gallery={product.images} />
        <Comments comments={product.comments} />
      </section>
    </MainLayout>
  );
};

export default Product;
