import React, { Component } from "react";
import PropTypes from "prop-types";

class ProductListItem extends Component {
  static propTypes = {
    product: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired
    }).isRequired,
    onSell: PropTypes.func.isRequired
  };

  static defaultProps = {
    product: {
      title: "default",
      price: 0,
      stock: 0
    }
  };

  render() {
    let { product: p, onSell } = this.props;
    return (
      <div className="item">
        <h1>{p.title}</h1>
        <h2>{p.price}</h2>
        <h3>{p.stock}</h3>
        <button onClick={() => onSell(p.id)}>SELL</button>
      </div>
    );
  }
}

// function ProductListItem(props) {
//   let { product: p, onSell } = props;
//   return (
//     <div className="item">
//       <h1>{p.title}</h1>
//       <h2>{p.price}</h2>
//       <h3>{p.stock}</h3>
//       <button onClick={() => onSell(p.id)}>SELL</button>
//     </div>
//   );
// }

// ProductListItem.propTypes = {
//   product: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     stock: PropTypes.number.isRequired
//   }).isRequired,
//   onSell: PropTypes.func.isRequired
// };

export default ProductListItem;
