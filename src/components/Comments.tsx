import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Comment from './Comment';

import common from '../../styles/common.module.scss';
import product from '../../styles/product.module.scss';
import styles from '../../styles/comments.module.scss';
import { FC } from 'react';
import { commentType } from '../../types';

type CommentsProps = {
  comments: commentType[];
};

const Comments: FC<CommentsProps> = ({ comments }) => {
  return (
    <section className={`${product.product__comments} ${styles.comments}`}>
      <textarea
        name="comment"
        id="comment"
        placeholder="Comment..."
        wrap="soft"
        className={styles.comments__new}
      />
      <div className={styles.comments__buttons}>
        <button className={`${styles.comments__btnPost} ${common.greenSquareBtn}`} title="Post">
          <FontAwesomeIcon icon={faCheck} className={styles.comment__icon} />
        </button>
        <button className={`${styles.comments__btnClear} ${common.redSquareBtn}`} title="Clear">
          <FontAwesomeIcon icon={faXmark} className={styles.comment__icon} />
        </button>
      </div>
      <div className={styles.comments}>
        {comments.map((commentItem, i) => {
          const { author, comment, date, time } = commentItem;
          return <Comment key={i} author={author} comment={comment} date={date} time={time} />;
        })}
      </div>
    </section>
  );
};

export default Comments;
