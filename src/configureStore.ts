import { createStore, applyMiddleware } from 'redux';
import ReduxThunk, { ThunkMiddleware } from 'redux-thunk';

import rootReducer from './store/rootReducer';
import { IRootReduxState, IAction } from './store/types';


export const middlewares = [ReduxThunk as ThunkMiddleware<IRootReduxState, IAction>];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(rootReducer);
