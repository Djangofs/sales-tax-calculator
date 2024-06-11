import { hello } from "./index";

describe("Index", () => {
  it("should return a string", () => {
    expect(hello()).toBe("Hello world!");
  });
});
