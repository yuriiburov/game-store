import { useFormik } from 'formik';
import * as Yup from 'yup';

import MainLayout from '../../src/components/MainLayout';

import styles from '../../styles/create.module.scss';
import content from '../../styles/content.module.scss';
import Head from 'next/head';
import { FC } from 'react';

const Create: FC = () => {
  const formik = useFormik({
    initialValues: {
      mainImage: '',
      productName: '',
      platforms: '',
      publisher: '',
      genre: '',
      voiceLang: '',
      textLang: '',
      legalInfo: '',
      price: '',
      gameInfo: '',
      gallery: '',
    },
    validationSchema: Yup.object({
      mainImage: Yup.string().url('Invalid url'),
      productName: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
      platforms: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
      publisher: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
      genre: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
      voiceLang: Yup.string().max(170, 'Must be 170 characters or less'),
      textLang: Yup.string().max(170, 'Must be 170 characters or less'),
      legalInfo: Yup.string().max(700, 'Must be 700 characters or less'),
      price: Yup.number().max(9999999, "Game can't be very expensive").required('Required'),
      gameInfo: Yup.string().max(1000, "Game can't be very expensive").required('Required'),
      gallery: Yup.string().max(1000, "Game can't be very expensive").required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  const setInitHeight = (event, defaultHeight = '64px') => {
    if (event) {
      const target = event.target ? event.target : event;
      target.style.height = defaultHeight;
      target.style.height = `${target.scrollHeight}px`;
    }
  };

  return (
    <>
      <Head>
        <title>Create Product | GameStore</title>
      </Head>
      <MainLayout>
        <section className={`${content.content__create} ${styles.create}`}>
          <form className={styles.create__form} onSubmit={formik.handleSubmit}>
            <div className={styles.create__image}>
              <label>
                <b>Main Image Url </b>
                <input
                  name="mainImage"
                  type="url"
                  placeholder="Preferably a square"
                  className={styles.create__input}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.mainImage}
                />
                {formik.touched.mainImage && formik.errors.mainImage && (
                  <p style={{ color: '#ff5952', margin: 0 }}>{formik.errors.mainImage}</p>
                )}
              </label>
            </div>
            <div className={styles.create__view}>
              <label
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  marginTop: '15px',
                  gap: '5px',
                }}
              >
                <b style={{ lineHeight: '42px' }}>The Name of the Game</b>
                <div>
                  <input
                    name="productName"
                    type="text"
                    className={`${styles.create__name} ${styles.create__input}`}
                    placeholder="..."
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.productName}
                  />
                  {formik.touched.productName && formik.errors.productName && (
                    <p style={{ color: '#ff5952', margin: 0 }}>{formik.errors.productName}</p>
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
                      <p style={{ color: '#ff5952', margin: 0 }}>{formik.errors.platforms}</p>
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
                      <p style={{ color: '#ff5952', margin: 0 }}>{formik.errors.publisher}</p>
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
                      <p style={{ color: '#ff5952', margin: 0 }}>{formik.errors.genre}</p>
                    )}
                  </span>
                  <b>
                    <label htmlFor="voiceLang">Voice language: </label>
                  </b>
                  <span className={styles.create__voiceLang}>
                    <textarea
                      name="voiceLang"
                      className={`${styles.create__textarea} ${styles.create__input}`}
                      placeholder="f.e. English, Ukrainian"
                      id="voiceLang"
                      onBlur={formik.handleBlur}
                      onChange={e => {
                        formik.handleChange(e);
                        setInitHeight(e);
                      }}
                      value={formik.values.voiceLang}
                    />
                    {formik.touched.voiceLang && formik.errors.voiceLang && (
                      <p style={{ color: '#ff5952', margin: 0 }}>{formik.errors.voiceLang}</p>
                    )}
                  </span>
                  <b>
                    <label htmlFor="textLang">Text languages: </label>
                  </b>
                  <span className={styles.create__textLang}>
                    <textarea
                      name="textLang"
                      className={`${styles.create__textarea} ${styles.create__input}`}
                      placeholder="f.e. English, Ukrainian"
                      id="textLang"
                      onBlur={formik.handleBlur}
                      onChange={e => {
                        formik.handleChange(e);
                        setInitHeight(e);
                      }}
                      value={formik.values.textLang}
                    />
                    {formik.touched.textLang && formik.errors.textLang && (
                      <p style={{ color: '#ff5952', margin: 0 }}>{formik.errors.textLang}</p>
                    )}
                  </span>
                </div>
                <div className={styles.create__infoAdditional}>
                  <fieldset className={styles.create__legalInfo}>
                    <legend className={styles.create__bold}>Legal Information</legend>
                    <textarea
                      name="legalInfo"
                      className={`${styles.create__textarea} ${styles.create__input} ${styles.create__bigTextarea}`}
                      maxLength={700}
                      placeholder="max 700 symbols"
                      onBlur={formik.handleBlur}
                      onChange={e => {
                        formik.handleChange(e);
                        setInitHeight(e);
                      }}
                      value={formik.values.legalInfo}
                    />
                  </fieldset>
                  {formik.touched.legalInfo && formik.errors.legalInfo && (
                    <p style={{ color: '#ff5952', margin: 0 }}>{formik.errors.legalInfo}</p>
                  )}
                </div>
              </div>
              <span className={styles.create__price}>
                <label
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    marginTop: '15px',
                    gap: '5px',
                  }}
                >
                  <b style={{ lineHeight: '42px' }}>$ </b>
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
                      <p style={{ color: '#ff5952', margin: 0 }}>{formik.errors.price}</p>
                    )}
                  </div>
                </label>
              </span>
              <fieldset className={styles.create__gameInfo}>
                <legend className={styles.create__bold}>Game Information</legend>
                <textarea
                  name="gameInfo"
                  className={`${styles.create__input} ${styles.create__textarea} ${styles.create__bigTextarea}`}
                  placeholder="..."
                  onBlur={formik.handleBlur}
                  onChange={e => {
                    formik.handleChange(e);
                    setInitHeight(e);
                  }}
                  value={formik.values.gameInfo}
                />
              </fieldset>
              {formik.touched.gameInfo && formik.errors.gameInfo && (
                <p style={{ color: '#ff5952', margin: 0 }}>{formik.errors.gameInfo}</p>
              )}
              <fieldset className={styles.create__plusImg}>
                <legend className={styles.create__bold}>Images for Gallery</legend>
                <textarea
                  name="gallery"
                  className={`${styles.create__input} ${styles.create__textarea} ${styles.create__bigTextarea}`}
                  placeholder="Importantly! Links must be separated by a spaces or start on a new line"
                  onBlur={formik.handleBlur}
                  onChange={e => {
                    formik.handleChange(e);
                    setInitHeight(e);
                  }}
                  value={formik.values.gallery}
                />
              </fieldset>
              {formik.touched.gallery && formik.errors.gallery && (
                <p style={{ color: '#ff5952', margin: 0 }}>{formik.errors.gallery}</p>
              )}
              <button type="submit" className={styles.create__submit}>
                Create
              </button>
            </div>
          </form>
        </section>
      </MainLayout>
    </>
  );
};

export default Create;
