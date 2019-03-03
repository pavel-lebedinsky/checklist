const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const spec = require('@checklist/checklist-api-spec');
const config = require('../lib/config');
const logger = require('../lib/logger');

const log = logger(config.logger);
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/*
 * Routes
 */
app.use('/health', require('./routes/health'));
app.use('/user', require('./routes/user'));
app.use('/checklists', require('./routes/checklists'));
app.get('/docs', (req, res, next) => {
  res.json(spec);
});

// catch 404
app.use((req, res, next) => {
  log.error(`Error 404 on ${req.url}.`);
  res.status(404).json({ status: 404, error: 'Not found' });
});

// catch errors
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const msg = err.error || err.message;
  log.error(`Error ${status} (${msg}) on ${req.method} ${req.url} with payload ${req.body}.`);
  res.status(status).json({ status, error: msg });
});


module.exports = app;
