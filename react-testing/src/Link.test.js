import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallowToJson } from "enzyme-to-json";
import Link from "./Link";

Enzyme.configure({ adapter: new Adapter() });

describe("Link", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Link title="mockTitle" url="mockurl" />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it("should handle the click event", () => {
    //simulating event
    window.alert = jest.fn();
    const wrapper = shallow(<Link title="mockTitle" url="mockUrl" />);
    wrapper.simulate("click");
    expect(window.alert).toHaveBeenCalledWith("clicked!");
  });

  it("should handle state changes", () => {
    //testing for state
    const wrapper = shallow(<Link title="mockTitle" url="mockUrl" />);
    expect(wrapper.state().clicked).toEqual(false);
    wrapper.simulate("click");
    expect(wrapper.state().clicked).toEqual(true);
  });

  it("should render props correctly", () => {
    const wrapper = shallow(
      <Link url="https://www.zeolearn.com" title="zeolearn" />
    );
    expect(wrapper.props().href).toEqual("https://www.zeolearn.com");
    expect(wrapper.props().children).toEqual("zeolearn");
  });
});
