'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var express = _interopDefault(require('express'));
var http = _interopDefault(require('http'));

const port = 3000;

const app = express();

app.use((req, res) => {
  res.send('test!');
});

const server = http.createServer(app);

server.listen(port, () => {

  console.log(`web server stated on port ${port}`);

});
