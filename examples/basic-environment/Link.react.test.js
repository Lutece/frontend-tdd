import React from "react";
import Link from "./Link.react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

test("Link changes the class when hovered", () => {
  const wrapper = shallow(<Link page="http://www.facebook.com">Facebook</Link>);
  expect(wrapper.find("a").length).toBe(1);
  //expect(wrapper.find("a").text()).toBe("http://www.facebook.com");
  expect(wrapper.find("a").text()).toBe("Facebook");

  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // const component2 = renderer.create(<Link>Facebook</Link>);
  // let tree2 = component2.toJSON();
  // expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree2.props.onMouseEnter();
  // // re-rendering
  // tree2 = component2.toJSON();
  // expect(tree2).toMatchSnapshot();

  // // manually trigger the callback
  // tree2.props.onMouseLeave();
  // // re-rendering
  // tree2 = component2.toJSON();
  // expect(tree2).toMatchSnapshot();
});
