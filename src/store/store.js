import { applyMiddleware, createStore } from 'redux';
import myLogger from '../middlewares/myLogger';
import rootReducer from '../modules';

export default createStore(rootReducer, applyMiddleware(myLogger));
