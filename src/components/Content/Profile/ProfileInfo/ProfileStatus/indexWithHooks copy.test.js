import React from "react";
import ProfileStatus from "./index";
import { create } from "react-test-renderer";

describe("ProfileStatus component", () => {
  test("status must be in state through props", () => {
    const component = create(<ProfileStatus userStatus="hello" />);
    const instance = component.getInstance();
    expect(instance.state.statusValue).toBe("hello");
  });

  test("after creation span with status must be displayed", () => {
    const component = create(<ProfileStatus userStatus="hello" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("the span must contain userStatus", () => {
    const component = create(<ProfileStatus userStatus="hello" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("hello");
  });

  test("input mustn't be displayed if span display", () => {
    const component = create(<ProfileStatus userStatus="hello" />);
    const root = component.root;
    expect(() => {
      root.findByType("input");
    }).toThrow();
  });

  test("after onClick input must be shown instead of span", () => {
    const component = create(<ProfileStatus userStatus="hello" />);
    const root = component.root;
    const spanDiv = root.findByProps({ className: "spanDiv" });
    spanDiv.props.onClick();
    const instance = component.getInstance();
    const input = root.findByType("input");

    expect(instance.state.editMode).toBe(true);
    expect(input).not.toBeNull();
  });

  test("callback must be called and get result: 4 ", () => {
    const mockCallback = jest.fn(() => 2 * 2);
    const component = create(
      <ProfileStatus userStatus="hello" updateUserStatusTC={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.results[0].value).toBe(4);
  });
});
