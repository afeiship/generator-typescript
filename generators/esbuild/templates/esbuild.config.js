// https://souporserious.com/bundling-typescript-with-esbuild-for-npm/
const { build } = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { clean } = require('esbuild-plugin-clean');

const shared = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  platform: 'node',
  sourcemap: true,
  target: 'node14',
  plugins: [
    clean({
      patterns: ['./dist/*'],
    }),
    nodeExternalsPlugin(),
  ],
};

build({
  ...shared,
  outfile: 'dist/cjs/index.js',
});

build({
  ...shared,
  outfile: 'dist/esm/index.js',
  format: 'esm',
});
