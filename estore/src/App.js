import React, { Component } from "react";
import Header from "./Header";
import "./App.css";
import Footer from "./Footer";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";

class App extends Component {
  render() {
    let isLoading = false;
    return (
      <div className="App">
        <Header />
        {/* this is comment*/}
        {isLoading ? <p>Loading...</p> : null}
        <AddProduct />
        <ProductList />
        <Footer />
      </div>
    );
  }
}

export default App;
