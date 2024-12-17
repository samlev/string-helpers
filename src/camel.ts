import lcfirst from "./lcfirst";
import normalize from "./normalize";

/**
 * Convert a string to camelCase
 *
 * @param str
 */
export default (str: string): string => lcfirst(str
    .split(/[^a-z0-9]/ig)
    .map(normalize)
    .join('')
);
