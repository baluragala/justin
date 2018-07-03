import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
    console.log("render");
    return (
      <div className="item">
        <h1>
          <Link to={`/products/detail/${p.id}`}>{p.title}</Link>
        </h1>
        <h2>{p.price}</h2>
        <h3>{p.stock}</h3>
        <button onClick={() => onSell(p.id)}>SELL</button>
      </div>
    );
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.product.stock != this.props.product.stock;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate", nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
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
