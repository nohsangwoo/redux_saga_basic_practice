import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import myLogger from '../middlewares/myLogger';
import rootReducer from '../modules';
import { composeWithDevTools } from 'redux-devtools-extension';

// export default createStore(rootReducer, applyMiddleware(myLogger, logger));
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
