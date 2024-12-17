import snake from "./snake";
import ucfirst from "./ucfirst";

/**
 * Converts a string to Headline Case
 *
 * @param str
 */
export default (str: string): string => snake(str).split("_").map(ucfirst).join(" ");
