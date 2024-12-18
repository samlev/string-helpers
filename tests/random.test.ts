import { describe, expect, test } from "@jest/globals";
import random from "../src/random";

describe("random tests", () => {
  test("generates a new random string each time it is called", () => {
    const attempts = [...Array(10)].map(() => random());

    for (const attempt of attempts) {
      expect(typeof attempt).toBe("string");
      expect(attempt.length).toBe(16);
      expect(attempt).toMatch(/^[a-zA-Z0-9]{16}$/);
      expect(attempts.filter((a) => a === attempt).length).toBe(1);
    }
  });

  const lengths = [1, 2, 3, 10, 11, 12, 20, 30, 40, 100];

  test.each(lengths)("generates a random string of the given length", (length) => {
    const output = random(length);

    expect(typeof output).toBe("string");
    expect(output.length).toBe(length);
  });

  const invalidLengths = [0, -1, 0.1, -1000, 0.0];

  test.each(invalidLengths)("generates a minimum of 1 character", (length) => {
    const output = random(length);

    expect(typeof output).toBe("string");
    expect(output.length).toBe(1);
  });
});
