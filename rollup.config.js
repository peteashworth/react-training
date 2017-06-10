import resolve from 'rollup-plugin-node-resolve';

export default {
  entry : 'server/index.js',
  format : 'cjs',
  plugins : [resolve()],
  dest : 'server-dist/index.js',
  external : ['http', 'express']
};