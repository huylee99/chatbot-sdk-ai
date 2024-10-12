import { add, minus } from "./utils";
import { test, expect } from "vitest";

test("add", () => {
  expect(add(1, 2)).toBe(3);
});

test("minus", () => {
    expect(minus(2, 1)).toBe(1);
})