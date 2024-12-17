import sanitize from "./sanitize";

/**
 * Converts a path string with wildcards (e.g. `*.example.com`) to a regular expression.
 *
 * @param str
 * @param start
 * @param end
 */
export default (str: string, start = "^", end = "$"): RegExp => {
  let head = start;
  let tail = end;
  let body = str ?? "";

  if (body.startsWith("*.")) {
    head = `${start}[a-zA-Z0-9-_]+`;
    body = body.slice(1);
  }

  if (body.endsWith(".*")) {
    tail = `[a-zA-Z0-9-_.]+${end}`;
    body = body.slice(0, -1);
  }

  body = body.split(".*.").map(sanitize).join(".[a-zA-Z0-9-_]+.");

  return new RegExp(`${head}${body}${tail}`);
};
