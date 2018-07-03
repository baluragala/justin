import React, { Component } from "react";
import "./ProductList.css";
import ProductListItem from "./ProductListItem";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    //this.saleItem = this.saleItem.bind(this);
  }

  saleItem = id => {
    let index = this.state.products.findIndex(p => p.id == id);
    this.state.products[index].stock = this.state.products[index].stock - 1;
    this.setState({ products: this.state.products });
  };

  render() {
    return (
      <div>
        {this.state.products.map(p => (
          <ProductListItem
            key={p.id}
            product={{ ...p }}
            onSell={this.saleItem}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
