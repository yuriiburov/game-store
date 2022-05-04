import { FC } from 'react';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/comments.module.scss';

type commentProps = {
  author: string;
  comment: string;
  date: string;
  time: string;
};

const Comment: FC<commentProps> = ({ author, comment, date, time }) => {
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
