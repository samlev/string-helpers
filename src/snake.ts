import studly from "./studly";

/**
 * Converts a string to Headline Case
 *
 * @param str
 */
export default (str: string): string =>
  studly(str)
    .replaceAll(/(?<=[a-z])([A-Z0-9])/g, "_$1")
    .replaceAll(/(?<=[0-9])([A-Za-z])/g, "_$1")
    .toLowerCase();
