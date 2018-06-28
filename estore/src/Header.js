import React, { Component } from "react";
import logo from "./logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="App-header" title="this is header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React 16</h1>
      </header>
    );
  }
}

export default Header;
