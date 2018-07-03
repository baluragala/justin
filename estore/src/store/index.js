import { createStore } from "redux";
import counterReducer from "../reducers/product";

const store = createStore(counterReducer);

export default store;
