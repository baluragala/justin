import React, { Component } from "react";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "iphone" };
  }
  render() {
    console.log("render");
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
        </form>
      </div>
    );
  }
}

export default AddProduct;
