import { describe, expect, test } from "@jest/globals";
import studly from "../src/studly";

describe("studly case tests", () => {
  test("creates studly case string", () => {
    expect(studly("hello world")).toBe("HelloWorld");
    expect(studly("hello-world")).toBe("HelloWorld");
    expect(studly("hello_world")).toBe("HelloWorld");
    expect(studly("helloWorld")).toBe("HelloWorld");
    expect(studly("HelloWorld")).toBe("HelloWorld");
    expect(studly("Hello World")).toBe("HelloWorld");
    expect(studly("hELLOwORLD")).toBe("HelloWorld");
    expect(studly("hello")).toBe("Hello");
  });

  test("handles numbers at the start of strings", () => {
    expect(studly("42 hello world")).toBe("42HelloWorld");
    expect(studly("42-hello-world")).toBe("42HelloWorld");
    expect(studly("42 Hello World")).toBe("42HelloWorld");
    expect(studly("42_Hello_World")).toBe("42HelloWorld");
    expect(studly("42HelloWorld")).toBe("42HelloWorld");
  });

  test("handles numbers in the middle of strings", () => {
    expect(studly("hello 42 world")).toBe("Hello42World");
    expect(studly("hello-42-world")).toBe("Hello42World");
    expect(studly("Hello 42 World")).toBe("Hello42World");
    expect(studly("Hello_42_World")).toBe("Hello42World");
    expect(studly("hello42world")).toBe("Hello42World");
  });

  test("handles numbers at the end of strings", () => {
    expect(studly("hello world 42")).toBe("HelloWorld42");
    expect(studly("hello-world-42")).toBe("HelloWorld42");
    expect(studly("Hello World 42")).toBe("HelloWorld42");
    expect(studly("Hello_World_42")).toBe("HelloWorld42");
  });
});
