import React, { Component } from "react";

class NoMatch extends Component {
  render() {
    return (
      <div>
        <h3>Oops.. page not found {this.props.location.pathname}</h3>
        <button onClick={() => this.props.history.push("/products")}>
          Go To Product List
        </button>
      </div>
    );
  }
}

export default NoMatch;
