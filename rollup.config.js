import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

const configGraphQL = (entryFileName, destFileName) => ({
  entry: entryFileName,
  format: 'cjs',
  plugins: [
    nodeResolve({ jsnext: true, main: true }),
    commonjs({ include: 'node_modules/**' })
  ],
  dest: destFileName,
  external: ['http', 'express', 'express-graphql', 'graphql']
});

const configRelay = configGraphQL;

const widgetsGraphQL = configGraphQL(
  'server/index-widgets-graphql.js',
  'server-dist/index-widgets-graphql.js'
);

const widgetsRelay = configRelay(
  'server/index-widgets-relay.js',
  'server-dist/index-widgets-relay.js'
);

export default [widgetsGraphQL, widgetsRelay];
