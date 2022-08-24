import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';

import pkg from './package.json';

const cjs = {
  exports: 'named',
  format: 'cjs',
};

const esm = {
  format: 'esm',
};

const baseConfig = {
  plugins: [
    json(),
    image(),
    typescript({
      typescript: require('typescript'),
    }),
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};

const commonConfig = {
  ...baseConfig,
  input: './src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      ...cjs,
    },
    {
      file: 'dist/index.esm.js',
      ...esm,
    },
  ],
};

export default [commonConfig];
