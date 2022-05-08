import { CHANGE_PAGE } from '../actions/paginationAction';

type paginationInitialValue = {
  startValue: number;
  lastValue: number;
};

const initialValue: paginationInitialValue = {
  startValue: 0,
  lastValue: 15,
};

type actionType = {
  type: string;
  payload: number;
};

const itemsPerPage: number = 15;

const searchReducer = (state = initialValue, action: actionType) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        startValue: itemsPerPage * action.payload - itemsPerPage,
        lastValue: itemsPerPage * action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
