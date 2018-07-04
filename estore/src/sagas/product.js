import { put, takeLatest } from "redux-saga/effects";
import {
  getProductsSuccessActionCreator,
  getProductsErrorActionCreator
} from "../actionCreators/product";
import { GET_PRODUCTS } from "../actionTypes/product";

function* getProducts() {
  let url = "http://localhost:4000/products";
  try {
    let products = yield fetch(url).then(r => r.json());
    yield put(getProductsSuccessActionCreator(products));
  } catch (error) {
    yield put(getProductsErrorActionCreator(error));
  }
}

export function* productWatcher() {
  yield takeLatest(GET_PRODUCTS, getProducts);
}
