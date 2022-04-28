import styles from '../../styles/pagination.module.scss';

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

const Pagination: FC = () => {
  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__buttons}>
        <button disabled className={styles.pagination__button}>
          <FontAwesomeIcon icon={faAngleLeft} className={styles.pagination__icon} />
        </button>
        <button className={styles.pagination__button}>
          <FontAwesomeIcon icon={faAngleRight} className={styles.pagination__icon} />
        </button>
      </div>
      <div className={styles.pagination__count}>1 of 3 pages</div>
    </div>
  );
};

export default Pagination;
