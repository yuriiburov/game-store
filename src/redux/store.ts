import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import commentsReducer from './reducers/commentReducer';

const reducer = combineReducers({ commentsList: commentsReducer });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
