import { describe, expect, test } from "@jest/globals";
import lcfirst from "../src/lcfirst";

describe("lcfirst tests", () => {
  test("lower cases the first character of srings", () => {
    expect(lcfirst("hello world")).toBe("hello world");
    expect(lcfirst("HELLO WORLD")).toBe("hELLO WORLD");
  });

  test("does not affect non-alpha first character of srings", () => {
    expect(lcfirst("42 HELLO WORLD")).toBe("42 HELLO WORLD");
    expect(lcfirst(" HELLO WORLD")).toBe(" HELLO WORLD");
    expect(lcfirst("_ HELLO WORLD")).toBe("_ HELLO WORLD");
    expect(lcfirst("- HELLO WORLD")).toBe("- HELLO WORLD");
    expect(lcfirst("§ HELLO WORLD")).toBe("§ HELLO WORLD");
  });
});
