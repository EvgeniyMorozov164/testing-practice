import { reverseString } from "./reverseString";

test("Reverse string test 1", () => {
  expect(reverseString("Cat")).toMatch("taC");
});

test("Reverse string test 2", () => {
  expect(reverseString("Hello, World!")).toMatch("!dlroW ,olleH");
});