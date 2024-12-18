/**
 * Generates a random string of the given length
 *
 * @param length
 */
export default (length = 16): string =>
  Array.from(crypto.getRandomValues(new Uint8Array(Math.max(1, length))), (v) => v.toString(36))
    .join("")
    .substring(0, Math.max(1, length));
