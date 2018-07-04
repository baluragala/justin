import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  SELL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE
} from "../actionTypes/product";

export function getProductsActionCreator() {
  return { type: GET_PRODUCTS };
}

export function getProductsSuccessActionCreator(products) {
  return { type: GET_PRODUCTS_SUCCESS, products };
}

export function getProductsErrorActionCreator(error) {
  return { type: GET_PRODUCTS_FAILURE, error };
}

export function addProductActionCreator(product) {
  return { type: ADD_PRODUCT, product };
}

export function sellActionCreator(id) {
  return { type: SELL, id };
}
