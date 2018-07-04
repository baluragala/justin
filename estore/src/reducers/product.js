import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  SELL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE
} from "../actionTypes/product";

import { fromJS } from "immutable";

function productReducer(
  prevState = fromJS({ products: [], isLoading: false }),
  action
) {
  console.log(prevState);
  console.log(prevState.get("products"));
  switch (action.type) {
    case GET_PRODUCTS:
      return prevState.set("isLoading", true);
    case GET_PRODUCTS_SUCCESS:
      return prevState.withMutations(map =>
        map.set("isLoading", false).set("products", fromJS(action.products))
      );
    case GET_PRODUCTS_FAILURE:
      return { ...prevState, isLoading: false, error: action.error };
    case ADD_PRODUCT:
      return { products: [...prevState.products, action.product] };
    case SELL:
      let index = prevState.products.findIndex(p => p.id == action.id);
      prevState.products[index].stock = prevState.products[index].stock - 1;
      return { products: [...prevState.products] };
    default:
      return prevState;
  }
}

export default productReducer;
