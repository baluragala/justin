import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <h1>ProductDetail for {this.props.match.params.pid}</h1>
      </div>
    );
  }
}

export default ProductDetail;
