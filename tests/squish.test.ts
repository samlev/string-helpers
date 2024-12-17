import { describe, expect, test } from "@jest/globals";
import squish from "../src/squish";

describe("squish tests", () => {
  test("removes additional whitespace from inside srings", () => {
    expect(squish("hello world")).toBe("hello world");
    expect(squish("hello     world")).toBe("hello world");
    expect(squish("hello\n\nworld")).toBe("hello world");
  });

  test("trims srings", () => {
    expect(squish("   hello world")).toBe("hello world");
    expect(squish("hello  world   ")).toBe("hello world");
    expect(squish("\nhello world")).toBe("hello world");
    expect(squish("hello world\n")).toBe("hello world");
    expect(squish("   hello world   ")).toBe("hello world");
    expect(squish("\n\nhello\nworld\n\n")).toBe("hello world");
  });
});
