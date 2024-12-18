# String Helpers
Some basic JavaScript string helpers, loosely based on Laravel's string helpers.

## Installation

Install from NPM:
```bash
npm install @samlevy/string-helpers
```

## Usage
```js
import Str from "string-helpers";

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
