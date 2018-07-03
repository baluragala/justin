import React, { Component } from "react";
import Header from "./Header";
import "./App.css";
import Footer from "./Footer";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import { Route, Link, Switch } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import NoMatch from "./NoMatch";
class App extends Component {
  render() {
    let isLoading = false;
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/products/add">New Product</Link>
            </li>
            <li>
              <Link to="/contcat-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <hr />

        <Switch>
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/products/add" component={AddProduct} />
          <Route path="/products/detail/:pid" component={ProductDetail} />
          <Route render={props => <NoMatch {...props} />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
