import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../styles/comments.module.scss';

const Comment = ({ author, comment, date, time }) => {
  return (
    <div className={styles.comment}>
      <h3 className={styles.comment__author}>
        {author} <FontAwesomeIcon icon={faComment} className={styles.comment__icon} />
      </h3>
      <p className={styles.comment__text}>{comment}</p>
      <div className={styles.comment__time}>
        {date} {time}
      </div>
    </div>
  );
};

export default Comment;
