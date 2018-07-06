import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallowToJson } from "enzyme-to-json";
import Link from "../Link";

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should have 3 link components", () => {
    const wrapper = mount(<App />);
    console.log(wrapper.debug());
    expect(wrapper.find(Link).length).toEqual(3);
  });

  it("should have App-header css class", () => {
    const wrapper = mount(<App />);
    console.log(wrapper.debug());
    expect(wrapper.find(".App-header").length).toEqual(1);
  });
});
