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
});
