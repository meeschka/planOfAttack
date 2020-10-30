import React from "react";
import { Text, GestureResponderEvent } from "react-native";
import TestRenderer from "react-test-renderer";

import Button from "./Button";

describe("button", () => {
  const renderTest = (
    type: "primary" | "accent" | "warning" = "accent",
    size: "sm" | "lg" = "sm",
    text: string = "Sample Button",
    onPress: (event: GestureResponderEvent) => void = () => "pressed"
  ) =>
    TestRenderer.create(
      <Button type={type} size={size} text={text} onPress={onPress} />
    );

  it("should correctly pass props", async () => {
    const testRender = renderTest();
    await expect(testRender.root.findByType(Button).props.type).toBe("accent");
    testRender.unmount();
  });

  it("should contain a text element that matches the text prop", async () => {
    const testRender = renderTest();
    expect(testRender.root.findByType(Text).props.children).toBe(
      "Sample Button"
    );
    testRender.unmount();
  });
});
