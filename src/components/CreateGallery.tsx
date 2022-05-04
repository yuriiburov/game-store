import { ChangeEvent, FC } from 'react';
import { stateValue } from '../../pages/create';
import styles from '../../styles/create.module.scss';
import common from '../../styles/common.module.scss';

type CreateGalleryPropsType = {
  galleryValues: stateValue[];
  setGalleryValues: Function;
};

const CreateGallery: FC<CreateGalleryPropsType> = ({ galleryValues, setGalleryValues }) => {
  const handleChange = (i: number, e: ChangeEvent<any>) => {
    const newGalleryValues = [...galleryValues];
    newGalleryValues[i].inputValue = e.target.value;
    setGalleryValues(newGalleryValues);
  };

  const addFormFields = e => {
    e.preventDefault();
    setGalleryValues([...galleryValues, { inputValue: '' }]);
  };

  const removeFormFields = (i: number) => {
    const newGalleryValues = [...galleryValues];
    newGalleryValues.splice(i, 1);
    setGalleryValues(newGalleryValues);
  };

  const checkFirstBtn = (i: number, array: stateValue[]) => {
    if (i || array.length > 1) {
      return (
        <button
          className={`${common.redSquareBtn} ${styles.create__galleryRemove}`}
          onClick={() => removeFormFields(i)}
        >
          x
        </button>
      );
    } else if (array.length === 1) {
      return null;
    }
  };

  return (
    <div className={styles.create__gallery}>
      {galleryValues.map((element, i, array) => (
        <div className={styles.create__galleryItem} key={i}>
          <input
            type="url"
            name="name"
            value={element.inputValue}
            onChange={e => handleChange(i, e)}
            className={`${styles.create__input} ${styles.create__galleryInput}`}
            placeholder="Image Url"
            required
          />
          {checkFirstBtn(i, array)}
        </div>
      ))}
      <div>
        <button
          className={`${common.greenSquareBtn} ${styles.create__galleryAdd}`}
          onClick={e => addFormFields(e)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CreateGallery;
