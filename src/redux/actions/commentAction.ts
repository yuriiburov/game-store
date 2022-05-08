import { putComment, getComments } from '../../gateway/productGateway';
import randomAuthor from '../../data/randomAuthor';
import { commentType } from '../../../types';

export const GET_COMMENTS = 'GET_COMMENTS';

export const commentsListReceived = (payload: commentType[]) => ({
  type: GET_COMMENTS,
  payload,
});

export const getCommentsList = (id: string) => async (dispatch: Function) => {
  const comments = await getComments(id);
  dispatch(commentsListReceived(comments));
};

export const putNewComment =
  (comment: string, id: string) => async (dispatch: Function, getState: any) => {
    if (comment.length !== 0) {
      const commentData: commentType = {
        id: Date.now().toString(),
        author: randomAuthor,
        comment,
        date: Date.now(),
      };

      await putComment(id, {
        comments: [commentData, ...getState().commentsList.comments],
      });

      dispatch(getCommentsList(id));
    }
  };
