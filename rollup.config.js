import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'server/index.js',
  format: 'cjs',
  plugins: [
    nodeResolve({ jsnext: true, main: true }),
    commonjs({ include: 'node_modules/**' })
  ],
  dest: 'server-dist/index.js',
  external: ['http', 'express', 'express-graphql', 'graphql']
};