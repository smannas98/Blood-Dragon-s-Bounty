const http = require('http');
const app = require('./app');

const server = http.createServer(app);
const port = normalizePort(process.env.PORT || '4000');
app.set('port', port);

server.listen(port);

function normalizePort(val) {
  // idk man :/
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

server.on('listening', () => {
  // turn on.
  console.log(
    `server is listening for requests on port ${server.address().port}`
  );
});
