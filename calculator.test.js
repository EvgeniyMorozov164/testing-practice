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

  test("Sum test 6", () => {
    expect(calculator.add(4.4, 5.5)).toBeLessThan(10);
  });

  test("subtract test 1", () => {
    expect(calculator.subtract(10, 50)).toBe(-40);
  });

  test("subtract test 2", () => {
    expect(calculator.subtract(100, 50)).toBe(50);
  });

  test("subtract test 3", () => {
    expect(calculator.subtract()).toBeFalsy();
  });

  test("subtract test 4", () => {
    expect(calculator.subtract(100)).toBe(100);
  });

  test("divide test 1", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test("divide test 2", () => {
    expect(calculator.divide(10, -2)).toBe(-5);
  });

  test("divide test 3", () => {
    expect(calculator.divide()).toBeFalsy();
  });

  test("divide test 4", () => {
    expect(calculator.divide(100)).toBe(100);
  });

  test("divide test 5", () => {
    expect(calculator.divide(100, 0)).toMatch("You cant divide by ZERO");
  });
});
