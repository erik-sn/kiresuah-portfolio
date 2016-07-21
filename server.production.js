
delete process.env.BROWSER;

import express from 'express';
import logger from 'morgan';
import compression from 'compression';
import http from 'http';
import path from 'path';

const app = express(); // delcare application
const PORT = process.env.PORT || 3010;

app.use(compression()); // compress compatible files for quicker client load time
app.use(logger('dev')); // log content

// Set path to public assets
app.use('/portfolio/resources', express.static('resources'));
app.use('/portfolio/static', express.static('dist'));

app.use('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/index.html'));
});

// create server based on application configuration
const server = http.createServer(app);

// start the server listening on specified port
server.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('App listening on port', PORT);
});