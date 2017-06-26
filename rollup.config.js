import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

const configGraphQL = (entryFileName, destFileName) => ({
  entry: entryFileName,
  format: 'cjs',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
      preferBuiltins: true,
    }),
    commonjs({ include: 'node_modules/**' }),
    json(),
  ],
  dest: destFileName,
  external: [
    'http', 'express', 'express-graphql', 'graphql', 'dgram',
    'url', 'https', 'buffer', 'string_decoder', 'path', 'dns',
    'stream', 'zlib', 'util', 'punycode', 'net', 'crypto',
  ],
});

// const configRelay = configGraphQL;

const widgetsGraphQL = configGraphQL(
  'server/index-widgets-graphql.js',
  'server-dist/index-widgets-graphql.js'
);

export default [widgetsGraphQL];

// const widgetsRelay = configRelay(
//   'server/index-widgets-relay.js',
//   'server-dist/index-widgets-relay.js'
// );

// export default [widgetsGraphQL, widgetsRelay];
