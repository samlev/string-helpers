/**
 * Escapes regular expression characters in a string.
 *
 * @param str
 */
export default (str: string): string => str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
