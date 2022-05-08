import { ChangeEvent, FC, useState } from 'react';
import Head from 'next/head';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MainLayout from '../../src/components/MainLayout';
import CreateGallery from '../../src/components/CreateGallery';
import { createProduct } from '../../src/gateway/productGateway';
import growTextarea from '../../src/data/growTextarea';
import { IProduct } from '../../types';
import styles from '../../styles/create.module.scss';
import content from '../../styles/content.module.scss';

export type stateValue = { inputValue: string };

const Create: FC = () => {
  const [galleryValues, setGalleryValues] = useState<stateValue[]>([{ inputValue: '' }]);

  const formik = useFormik<IProduct>({
    initialValues: {
      image: '',
      name: '',
      platforms: '',
      publisher: '',
      genre: '',
      voice: '',
      screen: '',
      legalInfo: '',
      price: 0,
      description: '',
    },
    validationSchema: Yup.object({
      image: Yup.string().url('Invalid url').required('Required'),
      name: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
      platforms: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
      publisher: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
      genre: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
      voice: Yup.string().max(170, 'Must be 170 characters or less'),
      screen: Yup.string().max(170, 'Must be 170 characters or less'),
      legalInfo: Yup.string().max(700, 'Must be 700 characters or less'),
      price: Yup.number()
        .max(9999999, "Game can't be very expensive")
        .min(0, "we don't pay extra for the sale of the product")
        .required('Required'),
      description: Yup.string().max(700, 'Must be 700 characters or less').required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      const gallery = [...galleryValues].map(input => input.inputValue).join(' ');
      const data = {
        id: Date.now().toString(),
        release: Date.now(),
        images: gallery,
        comments: [],
        ...values,
      };

      createProduct(data);
      resetForm();
    },
  });

  const changeBtn = () => {
    if (
      formik.values.price === 0 &&
      Object.values(formik.values)
        .filter(el => typeof el === 'string')
        .every(value => value === '') &&
      galleryValues.map(({ inputValue }) => inputValue).every(value => value === '')
    ) {
      return (
        <button disabled type="submit" className={styles.create__submit}>
          {"Can't send data, Your form is empty"}
        </button>
      );
    } else if (
      !(formik.isValid && formik.dirty) ||
      galleryValues.length < 4 ||
      galleryValues.map(({ inputValue }) => inputValue).some(value => value === '')
    ) {
      return (
        <button disabled type="submit" className={styles.create__submit}>
          {"Can't send data, Your form is not valid"}
        </button>
      );
    }
    return (
      <button type="submit" className={styles.create__submit}>
        Create
      </button>
    );
  };

  return (
    <>
      <Head>
        <title>Create Product | GameStore</title>
      </Head>
      <MainLayout>
        <section className={`${content.content__create} ${styles.create}`}>
          <form className={styles.create__form} onSubmit={formik.handleSubmit}>
            <div>
              <label className={styles.create__image}>
                <div>
                  <b>Main Image Url </b>
                  <input
                    name="image"
                    type="url"
                    placeholder="Preferably a square"
                    className={styles.create__input}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.image}
                  />
                  {formik.touched.image && formik.errors.image && (
                    <p className={styles.create__error}>{formik.errors.image}</p>
                  )}
                </div>
              </label>
              <fieldset className={styles.create__plusImg}>
                <legend className={styles.create__bold}>Images for gallery</legend>
                <CreateGallery galleryValues={galleryValues} setGalleryValues={setGalleryValues} />
              </fieldset>
              {galleryValues.length < 4 && <p className={styles.create__error}>min 4 urls</p>}
              {galleryValues.map(({ inputValue }) => inputValue).some(value => value === '') && (
                <p className={styles.create__error}>{"fields can't be empty"}</p>
              )}
            </div>
            <div className={styles.create__view}>
              <label className={styles.create__inputContainer}>
                <b className={styles.create__inputText}>The Name of the Game</b>
                <div>
                  <input
                    name="name"
                    type="text"
                    className={`${styles.create__name} ${styles.create__input}`}
                    placeholder="..."
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className={styles.create__error}>{formik.errors.name}</p>
                  )}
                </div>
              </label>
              <div className={styles.create__info}>
                <div className={styles.create__infoMain}>
                  <b>
                    <label htmlFor="platforms">Platforms: </label>
                  </b>
                  <span className={styles.create__platform}>
                    <input
                      name="platforms"
                      type="text"
                      className={`${styles.create__platform} ${styles.create__input}`}
                      placeholder="f.e. PS5, PS4"
                      id="platforms"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.platforms}
                    />
                    {formik.touched.platforms && formik.errors.platforms && (
                      <p className={styles.create__error}>{formik.errors.platforms}</p>
                    )}
                  </span>
                  <b>
                    <label htmlFor="publisher">Publisher: </label>
                  </b>
                  <span className={styles.create__company}>
                    <input
                      name="publisher"
                      type="text"
                      className={`${styles.create__publisher} ${styles.create__input}`}
                      placeholder="..."
                      id="publisher"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.publisher}
                    />
                    {formik.touched.publisher && formik.errors.publisher && (
                      <p className={styles.create__error}>{formik.errors.publisher}</p>
                    )}
                  </span>
                  <b>
                    <label htmlFor="genre">Genre: </label>
                  </b>
                  <span className={styles.create__genre}>
                    <input
                      name="genre"
                      type="text"
                      className={`${styles.create__genre} ${styles.create__input}`}
                      placeholder="..."
                      id="genre"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.genre}
                    />
                    {formik.touched.genre && formik.errors.genre && (
                      <p className={styles.create__error}>{formik.errors.genre}</p>
                    )}
                  </span>
                  <b>
                    <label htmlFor="voice">Voice language: </label>
                  </b>
                  <span className={styles.create__voice}>
                    <textarea
                      name="voice"
                      className={`${styles.create__textarea} ${styles.create__input}`}
                      placeholder="f.e. English, Ukrainian"
                      id="voice"
                      onBlur={formik.handleBlur}
                      onChange={e => {
                        formik.handleChange(e);
                        growTextarea(e);
                      }}
                      value={formik.values.voice}
                    />
                    {formik.touched.voice && formik.errors.voice && (
                      <p className={styles.create__error}>{formik.errors.voice}</p>
                    )}
                  </span>
                  <b>
                    <label htmlFor="screen">Text languages: </label>
                  </b>
                  <span className={styles.create__screen}>
                    <textarea
                      name="screen"
                      className={`${styles.create__textarea} ${styles.create__input}`}
                      placeholder="f.e. English, Ukrainian"
                      id="screen"
                      onBlur={formik.handleBlur}
                      onChange={e => {
                        formik.handleChange(e);
                        growTextarea(e);
                      }}
                      value={formik.values.screen}
                    />
                    {formik.touched.screen && formik.errors.screen && (
                      <p className={styles.create__error}>{formik.errors.screen}</p>
                    )}
                  </span>
                </div>
                <div className={styles.create__infoAdditional}>
                  <fieldset className={styles.create__legalInfo}>
                    <legend className={styles.create__bold}>Legal Information</legend>
                    <textarea
                      name="legalInfo"
                      className={`${styles.create__textarea} ${styles.create__input} ${styles.create__bigTextarea}`}
                      placeholder="max 700 symbols"
                      onBlur={formik.handleBlur}
                      onChange={e => {
                        formik.handleChange(e);
                        growTextarea(e);
                      }}
                      value={formik.values.legalInfo}
                    />
                  </fieldset>
                  {formik.touched.legalInfo && formik.errors.legalInfo && (
                    <p className={styles.create__error}>{formik.errors.legalInfo}</p>
                  )}
                </div>
              </div>
              <span className={styles.create__price}>
                <label className={styles.create__inputContainer}>
                  <b className={styles.create__inputText}>$ </b>
                  <div>
                    <input
                      name="price"
                      type="number"
                      className={styles.create__input}
                      placeholder="Price"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price && (
                      <p className={styles.create__error}>{formik.errors.price}</p>
                    )}
                  </div>
                </label>
              </span>
              <fieldset className={styles.create__description}>
                <legend className={styles.create__bold}>Game Information</legend>
                <textarea
                  name="description"
                  className={`${styles.create__input} ${styles.create__textarea} ${styles.create__bigTextarea}`}
                  placeholder="..."
                  onBlur={formik.handleBlur}
                  onChange={e => {
                    formik.handleChange(e);
                    growTextarea(e);
                  }}
                  value={formik.values.description}
                />
              </fieldset>
              {formik.touched.description && formik.errors.description && (
                <p className={styles.create__error}>{formik.errors.description}</p>
              )}
              {changeBtn()}
            </div>
          </form>
        </section>
      </MainLayout>
    </>
  );
};

export default Create;
