import normalize from "./normalize";

/**
 * Convert a string to snake_case
 *
 * @param str
 */
export default (str: string): string =>
  normalize(str)
    .replaceAll(/([^a-z0-9_]+)/g, "_$1")
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
