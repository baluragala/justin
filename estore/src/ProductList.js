import React, { Component } from "react";
import "./ProductList.css";
import ProductListItem from "./ProductListItem";
import {
  getProductsActionCreator,
  sellActionCreator
} from "./actionCreators/product";

import { connect } from "react-redux";

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getProducts();
    this.props.getProducts();
    this.props.getProducts();
    this.props.getProducts();
    this.props.getProducts();
  }

  saleItem = id => {
    this.props.sell(id);
  };

  render() {
    return (
      <div>
        {this.props.isLoading && <h3>Loading...</h3>}
        {this.props.prds.map(p => (
          <ProductListItem key={p.id} product={p} onSell={this.saleItem} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    prds: state.get("products"),
    isLoading: state.get("isLoading")
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => dispatch(getProductsActionCreator()),
    sell: id => dispatch(sellActionCreator(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
