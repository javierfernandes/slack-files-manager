/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

// SLACK
var Slack = require('slack-node');
var apiToken = "-- YOUR TOKEN HERE --";
var slack = new Slack(apiToken);

export default function(app) {

  // slack
  app.get('/slackfiles', function(req, res, next) {
    slack.api("files.list", { token : apiToken }, function(err, response) {
      if (err) next(new Error("ERROR from SLACK: " + JSON.stringify(response)))
      res.json(response.files)
    });
  });

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}
