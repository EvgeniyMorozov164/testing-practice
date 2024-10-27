import { analyzeArray } from "./analyzeArray";


describe("Analyze array function tests:", () => {
  test("Array test 1", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("Array test 2", () => {
    expect(analyzeArray([4, 43, 23, 1, 9])).toEqual({
      average: 16,
      min: 1,
      max: 43,
      length: 5,
    });
  });

  test("Array test 3", () => {
    expect(analyzeArray([1])).toEqual({
      average: 1,
      min: 1,
      max: 1,
      length: 1,
    });
  });

  test("Array test 4", () => {
    expect(analyzeArray([])).toBeNull();
  });

  test("Array test 5", () => {
    expect(analyzeArray([1, "2", "three", 4])).toMatch("Array contains NaN elements")
  });

  test("Array test 6", () => {
    expect(analyzeArray({number: 5})).toMatch("Input is not an ARRAY!");
  });
});