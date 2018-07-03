import { GET_PRODUCTS, ADD_PRODUCT, SELL } from "../actionTypes/product";

function productReducer(prevState = { products: [] }, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: [
          {
            id: 1,
            title: "mac book pro",
            price: 2000,
            stock: 20
          },
          {
            id: 2,
            title: "dell xps",
            price: 1300,
            stock: 40
          },
          {
            id: 3,
            title: "hp ultra book",
            price: 1000,
            stock: 27
          }
        ]
      };
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
