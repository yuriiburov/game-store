import { GET_COMMENTS } from '../actions/commentAction';

const initialState = {
  comments: [],
};

const commentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: [...payload],
      };
    default:
      return state;
  }
};

export default commentsReducer;
