import { describe, expect, test } from "@jest/globals";
import camel from "../src/camel";

describe("camel case tests", () => {
  test("creates camel case string", () => {
    expect(camel("hello world")).toBe("helloWorld");
    expect(camel("hello-world")).toBe("helloWorld");
    expect(camel("hello_world")).toBe("helloWorld");
    expect(camel("helloWorld")).toBe("helloWorld");
    expect(camel("HelloWorld")).toBe("helloWorld");
    expect(camel("Hello World")).toBe("helloWorld");
    expect(camel("hELLOwORLD")).toBe("helloWorld");
    expect(camel("hello")).toBe("hello");
  });

  test("handles numbers at the start of strings", () => {
    expect(camel("42 hello world")).toBe("42HelloWorld");
    expect(camel("42-hello-world")).toBe("42HelloWorld");
    expect(camel("42 Hello World")).toBe("42HelloWorld");
    expect(camel("42_Hello_World")).toBe("42HelloWorld");
    expect(camel("42HelloWorld")).toBe("42HelloWorld");
  });

  test("handles numbers in the middle of strings", () => {
    expect(camel("hello 42 world")).toBe("hello42World");
    expect(camel("hello-42-world")).toBe("hello42World");
    expect(camel("Hello 42 World")).toBe("hello42World");
    expect(camel("Hello_42_World")).toBe("hello42World");
    expect(camel("hello42world")).toBe("hello42World");
  });

  test("handles numbers at the end of strings", () => {
    expect(camel("hello world 42")).toBe("helloWorld42");
    expect(camel("hello-world-42")).toBe("helloWorld42");
    expect(camel("Hello World 42")).toBe("helloWorld42");
    expect(camel("Hello_World_42")).toBe("helloWorld42");
  });
});
