import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

require('./services/passport');
require('./routes/authRoutes')(server);

server.use(express.static('public'));
server.set('view engine', 'ejs');

server.listen(config.port, () => {
  console.log('Express is listening on port ' + config.port);
});
