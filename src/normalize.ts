import ucfirst from "./ucfirst";

export default (str: string): string => str.replace(
  /* match words as: aAAAA, Aaaaa, aaaaa, or AAAAA, then convert them to Aaaaa */
  /((?<=^|[^a-z])[a-z][A-Z]{2,}|(?<=^|[^A-Z])[A-Z][a-z]{2,}|(?<=^|[^a-zA-Z])[a-z]+|(?<=^|[^a-zA-Z])[A-Z]+)/g,
  (word) => ucfirst(word.toLowerCase())
)
