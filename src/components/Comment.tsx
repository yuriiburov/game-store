import { FC } from 'react';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dateGenerate, { timeGenerate } from '../data/date';
import styles from '../../styles/comments.module.scss';

type commentProps = {
  author: string;
  comment: string;
  date: number;
};

const Comment: FC<commentProps> = ({ author, comment, date }) => {
  return (
    <div className={styles.comment}>
      <h3 className={styles.comment__author}>
        {author} <FontAwesomeIcon icon={faComment} className={styles.comment__icon} />
      </h3>
      <p className={styles.comment__text}>{comment}</p>
      <div className={styles.comment__time}>{`${dateGenerate(date)} ${timeGenerate(date)}`}</div>
    </div>
  );
};

export default Comment;
