import lcfirst from "./lcfirst";
import studly from "./studly";

/**
 * Convert a string to camelCase
 *
 * @param str
 */
export default (str: string): string => lcfirst(studly(str));
