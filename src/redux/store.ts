import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import commentsReducer from './reducers/commentReducer';
import paginationReducer from './reducers/paginationReducer';

const reducer = combineReducers({ commentsList: commentsReducer, pagination: paginationReducer });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
