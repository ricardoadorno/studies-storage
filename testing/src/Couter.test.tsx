import { render, fireEvent } from "@testing-library/react";
import CounterButton from "./CounterButton";
import { suite, test } from "vitest";
import { expect } from "chai";

suite("CounterButton", () => {
  test("increments the counter when the button is clicked", async () => {
    const { getByText } = render(<CounterButton />);
    const button = getByText("Click me");
    const buttonx2 = getByText("Click me x2");
    const counter = getByText("You've clicked the button 0 times.");

    expect(counter).to.exist;
    expect(button).to.exist;
    expect(buttonx2).to.exist;

    fireEvent.click(button);

    expect(counter.textContent).to.equal("You've clicked the button 1 times.");

    fireEvent.click(buttonx2);

    expect(counter.textContent).to.equal("You've clicked the button 3 times.");
  });
});

suite("InputState", () => {
  test("updates the input value when the input is changed", async () => {
    const { getByLabelText, getByText, getByTestId } = render(
      <CounterButton />
    );
    const input = getByLabelText("input") as HTMLInputElement;
    const clearButton = getByText("Clear");
    const toggleButton = getByText("Toggle");

    expect(input).to.exist;
    expect(clearButton).to.exist;
    expect(toggleButton).to.exist;

    fireEvent.change(input, { target: { value: "Hello" } });

    expect(input.value).to.equal("Hello");

    fireEvent.click(toggleButton);

    const toggleHeading = getByTestId("heading");

    expect(toggleHeading).to.exist;
    expect(toggleHeading.textContent).to.equal("Hello");

    expect(getByText("Hello")).to.exist;

    fireEvent.click(clearButton);

    expect(input.value).to.equal("");
    expect(toggleHeading).to.exist;
  });
});

// Fetch tests
