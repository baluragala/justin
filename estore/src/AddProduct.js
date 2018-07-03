import React, { Component } from "react";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "iphone" };
    this.priceEleRef = null;
  }

  getPrice() {
    console.dir(this.priceEleRef);
  }

  setPrice() {
    this.priceEleRef.value = 200;
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.title}
            onChange={e => {
              console.log(e);
              this.setState({ title: e.target.value });
            }}
          />
          <input type="text" ref={eleRef => (this.priceEleRef = eleRef)} />
        </form>
        <button onClick={() => this.setPrice()}>SET</button>
        <button onClick={() => this.getPrice()}>GET</button>
      </div>
    );
  }
}

export default AddProduct;
