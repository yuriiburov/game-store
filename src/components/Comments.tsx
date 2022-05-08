import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from './Comment';
import { getCommentsList, putNewComment } from '../redux/actions/commentAction';
import growTextarea from '../data/growTextarea';
import styles from '../../styles/comments.module.scss';
import common from '../../styles/common.module.scss';
import product from '../../styles/product.module.scss';

type CommentsProps = {
  id: string;
};

const Comments: FC<CommentsProps> = ({ id }) => {
  const [commentValue, setCommentValue] = useState<string>('');
  const { comments }: any = useSelector<any>(state => state.commentsList);
  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(getCommentsList(id));
  }, []);

  return (
    <section className={`${product.product__comments} ${styles.comments}`}>
      <textarea
        name="comment"
        id="comment"
        placeholder="Comment..."
        wrap="soft"
        className={styles.comments__new}
        value={commentValue}
        onChange={e => {
          setCommentValue(e.target.value);
          growTextarea(e);
        }}
      />
      <div className={styles.comments__buttons}>
        <button
          onClick={() => {
            dispatch(putNewComment(commentValue, id));
            setCommentValue('');
          }}
          className={`${styles.comments__btnPost} ${common.greenSquareBtn}`}
          title="Post"
        >
          <FontAwesomeIcon icon={faCheck} className={styles.comment__icon} />
        </button>
        <button
          onClick={() => setCommentValue('')}
          className={`${styles.comments__btnClear} ${common.redSquareBtn}`}
          title="Clear"
        >
          <FontAwesomeIcon icon={faXmark} className={styles.comment__icon} />
        </button>
      </div>
      <div className={styles.comments}>
        {comments
          .sort((a, b) => b.date - a.date)
          .map(commentItem => {
            const { id, author, comment, date } = commentItem;
            return <Comment key={id} author={author} comment={comment} date={date} />;
          })}
      </div>
    </section>
  );
};

export default Comments;
