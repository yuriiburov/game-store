import MainLayout from '../../src/components/MainLayout';

import styles from '../../styles/create.module.scss';
import content from '../../styles/content.module.scss';
import Head from 'next/head';

const Create = () => {
  return (
    <>
      <Head>
        <title>GameStore | Create Product</title>
      </Head>
      <MainLayout>
        <section className={`${content.content__create} ${styles.create}`}>
          <form className={styles.create__form}>
            <div className={styles.create__image}>
              <label>
                <b>Main Image Url </b>
                <input
                  type="url"
                  placeholder="Preferably a square"
                  className={styles.create__input}
                />
              </label>
            </div>
            <div className={styles.create__view}>
              <label>
                <b>The Name of the Game </b>
                <input
                  type="text"
                  className={`${styles.create__name} ${styles.create__input}`}
                  placeholder="..."
                />
              </label>
              <div className={styles.create__info}>
                <div className={styles.create__infoMain}>
                  <b>
                    <label htmlFor="platforms">Platforms: </label>
                  </b>
                  <span className={styles.create__platform}>
                    <input
                      type="text"
                      className={`${styles.create__platform} ${styles.create__input}`}
                      placeholder="f.e. PS5, PS4"
                      id="platforms"
                    />
                  </span>
                  <b>
                    <label htmlFor="publisher">Publisher: </label>
                  </b>
                  <span className={styles.create__company}>
                    <input
                      type="text"
                      className={`${styles.create__publisher} ${styles.create__input}`}
                      placeholder="..."
                      id="publisher"
                    />
                  </span>
                  <b>
                    <label htmlFor="genre">Genre: </label>
                  </b>
                  <span className={styles.create__genre}>
                    <input
                      type="text"
                      className={`${styles.create__genre} ${styles.create__input}`}
                      placeholder="..."
                      id="genre"
                    />
                  </span>
                  <b>
                    <label htmlFor="voicelang">Voice language: </label>
                  </b>
                  <span className={styles.create__voiceLang}>
                    <textarea
                      className={`${styles.create__textarea} ${styles.create__input}`}
                      placeholder="f.e. English, Ukrainian"
                      id="voicelang"
                    ></textarea>
                  </span>
                  <b>
                    <label htmlFor="textlang">Text languages: </label>
                  </b>
                  <span className={styles.create__textLang}>
                    <textarea
                      className={`${styles.create__textarea} ${styles.create__input}`}
                      placeholder="f.e. English, Ukrainian"
                      id="textlang"
                    ></textarea>
                  </span>
                </div>
                <div className={styles.create__infoAdditional}>
                  <fieldset className={styles.create__legalInfo}>
                    <legend className={styles.create__bold}>Legal Information</legend>
                    <textarea
                      className={`${styles.create__textarea} ${styles.create__input} ${styles.create__bigTextarea}`}
                      maxLength="700"
                      placeholder="max 700 symbols"
                    ></textarea>
                  </fieldset>
                </div>
              </div>
              <span className={styles.create__price}>
                <label>
                  <b>$ </b>
                  <input type="number" className={styles.create__input} placeholder="Price" />
                </label>
              </span>
              <fieldset className={styles.create__gameInfo}>
                <legend className={styles.create__bold}>Game Information</legend>
                <textarea
                  className={`${styles.create__input} ${styles.create__textarea} ${styles.create__bigTextarea}`}
                  placeholder="..."
                ></textarea>
              </fieldset>
              <fieldset className={styles.create__plusImg}>
                <legend className={styles.create__bold}>Images for Gallery</legend>
                <textarea
                  className={`${styles.create__input} ${styles.create__textarea} ${styles.create__bigTextarea}`}
                  placeholder="Importantly! Links must be separated by a spaces or start on a new line"
                ></textarea>
              </fieldset>
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
