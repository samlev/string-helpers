# String Helpers

[![Test](https://github.com/samlev/string-helpers/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/samlev/string-helpers/actions/workflows/test.yml)
![NPM Version](https://img.shields.io/npm/v/%40samlevy%2Fstring-helpers)
![NPM Last Update](https://img.shields.io/npm/last-update/%40samlevy%2Fstring-helpers)
![NPM License](https://img.shields.io/npm/l/%40samlevy%2Fstring-helpers)

Some basic JavaScript string helpers, loosely based on some of Laravel's string helpers.

## Installation

Install from NPM:
```bash
npm install @samlevy/string-helpers
```

## Usage

You can import the entire module to access the helpers:

```js
import Str from "@samlevy/string-helpers";

Str.camel('Foo Bar'); // 'fooBar'
Str.camel('foo/bar.baz'); // 'fooBarBaz'
Str.camel('foo bar'); // 'fooBar'

Str.headline('foo bar'); // 'Foo Bar'
Str.headline('foo/bar.baz'); // 'Foo Bar Baz'
Str.headline('fooBarBaz'); // 'Foo Bar Baz'

Str.snake('Foo Bar'); // 'foo_bar'
Str.snake('fooBarBaz'); // 'foo_bar_baz'
Str.snake('foo/bar.baz'); // 'foo_bar_baz'

Str.studly('Foo Bar'); // 'FooBar'
Str.studly('foo/bar.baz'); // 'FooBarBaz'
Str.studly('foo bar'); // 'FooBar'
```

Or you can import individual helpers:

```js
import { camel, random, squish } from "@samlevy/string-helpers";

camel('Foo Bar'); // 'fooBar'
camel('foo/bar.baz'); // 'fooBarBaz'
camel('foo bar'); // 'fooBar'

random(); // 'a1b2C3D4e5F6g7H8'
random(10); // 'a1b2C3D4e5'

squish('foo    bar'); // 'foo bar'
squish('    foo    bar    '); // 'foo bar'
squish("  \n\n  foo\nbar  \n\n\n  "); // 'foo bar'
```

## Testing

You can run the tests and linters through `npm run` or through `npx`:

```bash
# Tests
npm run test
npx jest

# Biome linting
npm run biome
npx biome check

# ESLint linting
npm run eslint
npx eslint

# OXLint linting
npm run oxlint
npx oxlint
```

## Contributing
Contributions via PR are welcome, either as complete changes (including tests), or as
failing test cases.
