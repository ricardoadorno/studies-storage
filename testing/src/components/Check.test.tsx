import { render, fireEvent } from "@testing-library/react";
import Check from "./Check";
import { suite, test } from "vitest";
import { expect } from "chai";

suite("Check", () => {
  test("should render", () => {
    const { getByRole } = render(<Check />);
    expect(getByRole("checkbox")).to.exist;
  });

  test("should be checked", () => {
    const { getByRole, queryByTestId } = render(<Check />);
    expect(queryByTestId("span")).to.null;
    fireEvent.click(getByRole("checkbox"));
    expect(getByRole("checkbox")).to.have.property("checked", true);
    expect(queryByTestId("span")).to.exist;
  });
});
