/* eslint-disable no-console */
/* eslint no-unused-vars:0 */
import 'dotenv/config';
import http from 'http';
import app from './app';

async function setupApp() {
  const port = parseInt(process.env.NODE_PORT) || 3001;
  app.set('port', port);
  const server = http.createServer(app);
  server.listen(port);

  server.on('error', (error) => {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;

      case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  });

  server.on('listening', () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Visit http://localhost:${port}/graphiql`);
  });
}

setupApp()
  .catch(console.error);
