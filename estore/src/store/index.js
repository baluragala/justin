import { createStore, applyMiddleware } from "redux";
import counterReducer from "../reducers/product";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { productWatcher } from "../sagas/product";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  counterReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(productWatcher);
export default store;
