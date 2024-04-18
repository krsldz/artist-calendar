require('dotenv').config();
const express = require('express');
const next = require('next');

const authenticateToken = require('./middleware/auth');
const serverConfig = require('./config/serverConfig');

const artist = require('./routes/artist.routes');
const auth = require('./routes/auth.routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT ?? 4001;

app
  .prepare()
  .then(() => {
    const server = express();

    serverConfig(server);

    server.use('/artist', artist);
    server.use('/auth', auth);

    server.get('/main', authenticateToken, (req, res) => {
      app.render(req, res, '/main');
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${PORT} port`);
    });
  })
  .catch((er) => {
    console.error(er.stack);
    process.exit(1);
  });
