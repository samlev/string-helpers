import camel from "./camel";
import headline from "./headline";
import lcfirst from "./lcfirst";
import normalize from "./normalize";
import random from "./random";
import regex from "./regex";
import snake from "./snake";
import squish from "./squish";
import studly from "./studly";
import ucfirst from "./ucfirst";
export { camel, headline, lcfirst, normalize, random, regex, snake, squish, studly, ucfirst };
declare const _default: {
    camel: (str: string) => string;
    headline: (str: string) => string;
    lcfirst: (str: string) => string;
    normalize: (str: string) => string;
    random: (length?: number) => string;
    regex: {
        sanitize: (str: string) => string;
        path: (str: string, start?: string, end?: string) => RegExp;
    };
    snake: (str: string) => string;
    squish: (str: string) => string;
    studly: (str: string) => string;
    ucfirst: (str: string) => string;
};
export default _default;
