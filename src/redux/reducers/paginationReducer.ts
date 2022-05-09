import { CHANGE_PAGE } from '../actions/paginationAction';

type paginationInitialValue = {
  startValue: number;
  lastValue: number;
  itemsPerPage: number;
};

const initialValue: paginationInitialValue = {
  startValue: 0,
  lastValue: 15,
  itemsPerPage: 15,
};

type actionType = {
  type: string;
  payload: number;
};

// const itemsPerPage: number = 15;

const paginationReducer = (state = initialValue, action: actionType) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        startValue: state.itemsPerPage * action.payload - state.itemsPerPage,
        lastValue: state.itemsPerPage * action.payload,
      };
    default:
      return state;
  }
};

export default paginationReducer;
