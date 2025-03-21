# Node.js Arguments Parser

A lightweight and flexible arguments parser for Node.js with full support for TypeScript, CommonJS (CJS), and ES Modules (ESM).
🚀 Zero dependencies – built for efficiency and simplicity.

## Installation

```bash
npm install @uvarovag/argv-parser
```

## Usage

### ES Modules (ESM)

```js
import parseArgs from '@uvarovag/argv-parser'

const args = parseArgs(process.argv)
console.log(args)
```

### CommonJS (CJS)

```js
const parseArgs = require('@uvarovag/argv-parser')

const args = parseArgs(process.argv)
console.log(args)
```
