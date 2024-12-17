import normalize from "./normalize";

/**
 * Convert a string to StudlyCase
 *
 * @param str
 */
export default (str: string): string =>
  str
    .split(/[^a-z0-9]/gi)
    .map(normalize)
    .join("");
