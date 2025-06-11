import path from "./path";
import sanitize from "./sanitize";
export { sanitize, path };
declare const _default: {
    sanitize: (str: string) => string;
    path: (str: string, start?: string, end?: string) => RegExp;
};
export default _default;
