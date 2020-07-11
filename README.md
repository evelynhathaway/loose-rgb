<div align="center">

# Loose RGB

**Normalizes RGB color data types to a certain format**

[![npm version](https://badgen.net/npm/v/loose-rgb?icon=npm)](https://www.npmjs.com/package/loose-rgb)
[![check status](https://badgen.net/github/checks/evelynhathaway/loose-rgb/master?icon=github)](https://github.com/evelynhathaway/loose-rgb/actions)
[![minified + gzip bundle size](https://badgen.net/bundlephobia/minzip/loose-rgb)](https://bundlephobia.com/result?p=loose-rgb)
[![license: MIT](https://badgen.net/badge/license/MIT/blue)](/LICENSE)

</div>

## Description

Working with different color libraries gets cumbersome when they use different RGB value formats. Now you can `normalize` the outputs and `convert` your inputs.

## Features

- Normalize any RGB format to `{r, g, b, [a]}`
- Convert `{r, g, b, [a]}` to any RGB format
- RGBA support
- Hex support

## Installation

```bash
npm install loose-rgb
```

## Usage

```js
import looseRGB from "loose-rgb";

// Convert any type to `{r, g, b, [a]}`
looseRGB.normalize({red: 1, green: 2, blue: 3}) // ? {r: 1, g: 2, b: 3}
looseRGB.normalize("FFBB00AA") // ? {r: 255, g: 187, b: 0, a: 0.66796875}

// Convert `{r, g, b, [a]}` to any type
looseRGB.convert.toCSSValue({r: 255, g: 187, b: 0, a: 0.66796875}) // ? rgba(255, 187, 0, 0.66796875)
looseRGB.convert.toUpperKeys({r: 1, g: 2, b: 3}) // ? {R: 1, G: 2, B: 3}

// Composing the above methods
import {convert, normalize} from "loose-rgb";

const anyToHex = (rgba) => convert.toHex(normalize(rgba));
anyToHex([1, 2, 3, 0.4]) // ? #01020366
```

## License

Copyright Evelyn Hathaway, [MIT License](/LICENSE)
