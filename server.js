import config from './config';
const apiRouter = require('./api');

const express = require('express');
const server = express();

require('./services/passport');
require('./routes/authRoutes')(server);

server.use(express.static('public'));
server.set('view engine', 'ejs');

server.listen(config.port, () => {
  console.log('Express is listening on port ' + config.port);
});
