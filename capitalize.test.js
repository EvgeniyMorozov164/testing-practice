import { capitalize } from "./capitalize"

test("Capitalize string 1", () => {
  expect(capitalize("cat")).toMatch("Cat");  
});

test("Capitalize string 2", () => {
  expect(capitalize("hello world")).toMatch("Hello world");
});