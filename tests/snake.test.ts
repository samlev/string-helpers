import { describe, expect, test } from "@jest/globals";
import snake from "../src/snake";

describe("snake tests", () => {
  test("snakes a string", () => {
    expect(snake("hello world")).toBe("hello_world");
    expect(snake("hello-world")).toBe("hello_world");
    expect(snake("hello_world")).toBe("hello_world");
    expect(snake("helloWorld")).toBe("hello_world");
    expect(snake("HelloWorld")).toBe("hello_world");
    expect(snake("Hello World")).toBe("hello_world");
    expect(snake("hELLOwORLD")).toBe("hello_world");
    expect(snake("hello")).toBe("hello");
  });

  test("handles numbers at the start of strings", () => {
    expect(snake("42 hello world")).toBe("42_hello_world");
    expect(snake("42-hello-world")).toBe("42_hello_world");
    expect(snake("42 Hello World")).toBe("42_hello_world");
    expect(snake("42_Hello_World")).toBe("42_hello_world");
    expect(snake("42HelloWorld")).toBe("42_hello_world");
  });

  test("handles numbers in the middle of strings", () => {
    expect(snake("hello 42 world")).toBe("hello_42_world");
    expect(snake("hello-42-world")).toBe("hello_42_world");
    expect(snake("Hello 42 World")).toBe("hello_42_world");
    expect(snake("Hello_42_World")).toBe("hello_42_world");
    expect(snake("hello42world")).toBe("hello_42_world");
  });

  test("handles numbers at the end of strings", () => {
    expect(snake("hello world 42")).toBe("hello_world_42");
    expect(snake("hello-world-42")).toBe("hello_world_42");
    expect(snake("Hello World 42")).toBe("hello_world_42");
    expect(snake("Hello_World_42")).toBe("hello_world_42");
  });
});
