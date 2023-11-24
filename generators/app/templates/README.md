# <%= project_name %>
> <%= description %>

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @<%= scope %>/<%= project_name %>
```

## usage
```js
import <%- ctx.camelize(String(project_name)) %> from '@<%= scope %>/<%= project_name %>';

// usage goes here.
```

## types
```ts
/// <reference types="@<%= scope %>/<%= project_name %>/global.d.ts" />
```

## license
Code released under [the MIT license](https://github.com/afeiship/<%= project_name %>/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/<%= project_name %>
[version-url]: https://npmjs.org/package/@jswork/<%= project_name %>

[license-image]: https://img.shields.io/npm/l/@jswork/<%= project_name %>
[license-url]: https://github.com/afeiship/<%= project_name %>/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/<%= project_name %>
[size-url]: https://github.com/afeiship/<%= project_name %>/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/<%= project_name %>
[download-url]: https://www.npmjs.com/package/@jswork/<%= project_name %>
