import { add, divide, minus, multiply } from "./utils";
import { test, expect } from "vitest";

test("add", () => {
  expect(add(1, 2)).toBe(3);
});

test("minus", () => {
    expect(minus(2, 1)).toBe(1);
})

test("divide", () => {
    expect(divide(4, 2)).toBe(2);
})

test("multiply", () => {
    expect(multiply(4, 2)).toBe(8);
})