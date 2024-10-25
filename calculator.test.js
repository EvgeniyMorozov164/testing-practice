import { calculator } from "./calculator";

describe("Calculator tests: ", () => {
  test("Sum test 1", () => {
    expect(calculator.add(1, 1)).toBe(2);
  });

  test("Sum test 2", () => {
    expect(calculator.add(-10, 0)).toBe(-10);
  });

  test("Sum test 3", () => {
    expect(calculator.add()).toBeFalsy();
  });

  test("Sum test 4", () => {
    expect(calculator.add(1)).toBe(1);
  });

  test("Sum test 5", () => {
    expect(calculator.add(100)).toBe(100);
  });
});