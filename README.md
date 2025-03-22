# Node.js Arguments Parser

![tests](https://github.com/uvarovag/argv-parser/actions/workflows/test.yml/badge.svg)
Lightweight and flexible arguments parser for Node.js with full support for TypeScript, CommonJS (CJS), and ES Modules (ESM).

## Installation

```bash
npm install @uvarovag/argv-parser
```

## Usage

### ES Modules (ESM)

```js
import { parseArgv } from '@uvarovag/argv-parser'

const args = parseArgv(process.argv)
console.log(args)
```

### CommonJS (CJS)

```js
const { parseArgv } = require('@uvarovag/argv-parser')

const args = parseArgv(process.argv)
console.log(args)
```

## Examples

```bash
node ./test.js --positive=42 -negative=-10 --float=3.14 -true=true --false=false --text=hello --special=foo=bar --empty
```

```js
// test.js
import { parseArgv } from '@uvarovag/argv-parser'

const args = parseArgv(process.argv)
console.log(args)

{
    node: '/opt/homebrew/Cellar/node/21.2.0/bin/node',
    script: '/Users/uvarovag/Desktop/rect-app/test.js',
    positive: 42,
    negative: -10,
    float: 3.14,
    true: true,
    false: false,
    text: 'hello',
    special: 'foo=bar',
    empty: true,
}
```
