import { describe, expect, test } from "@jest/globals";
import normalize from "../src/normalize";

describe("normalize case tests", () => {
  test("normalizes case strings", () => {
    expect(normalize("hello world")).toBe("Hello World");
    expect(normalize("hello-world")).toBe("Hello-World");
    expect(normalize("hello_world")).toBe("Hello_World");
    expect(normalize("helloWorld")).toBe("HelloWorld");
    expect(normalize("HelloWorld")).toBe("HelloWorld");
    expect(normalize("Hello World")).toBe("Hello World");
    expect(normalize("hELLOwORLD")).toBe("HelloWorld");
    expect(normalize("hELLO wORLD")).toBe("Hello World");
    expect(normalize("hello")).toBe("Hello");
  });
});
