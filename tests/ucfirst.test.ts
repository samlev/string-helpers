import { describe, expect, test } from "@jest/globals";
import ucfirst from "../src/ucfirst";

describe("ucfirst tests", () => {
  test("lower cases the first character of srings", () => {
    expect(ucfirst("hello world")).toBe("Hello world");
    expect(ucfirst("HELLO WORLD")).toBe("HELLO WORLD");
  });

  test("does not affect non-alpha first character of srings", () => {
    expect(ucfirst("42 hello world")).toBe("42 hello world");
    expect(ucfirst(" hello world")).toBe(" hello world");
    expect(ucfirst("_ hello world")).toBe("_ hello world");
    expect(ucfirst("- hello world")).toBe("- hello world");
    expect(ucfirst("§ hello world")).toBe("§ hello world");
  });
});
