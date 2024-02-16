require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');

const artist = require('./routes/artist.routes');
const auth = require('./routes/auth.routes');

const app = express();

serverConfig(app);

app.use('/artist', artist);
app.use('/auth', auth);

const PORT = process.env.PORT ?? 4001;

app.listen(PORT, () => console.log(`Server is up on Port ${PORT}`));
