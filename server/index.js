import express from 'express';
import http from 'http';

const port = 3000;

const app = express();

app.use((req, res) => {
  res.send('test!');
});

const server = http.createServer(app);

server.listen(port, () => {

  console.log(`web server stated on port ${port}`);

});
