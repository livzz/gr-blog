const path = require('path');
const serverless = require('serverless-http');
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const Firebase = require('firebase');
const app = express();
const routes = require('./routes/index');

app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var config = {
  apiKey: 'AIzaSyAx0_nw4HxTFN09xz2ctPvxqx2dSCY1ek8',
  authDomain: 'jurassic-pork.firebaseapp.com',
  databaseURL: 'https://jurassic-pork.firebaseio.com',
  projectId: 'jurassic-pork',
  storageBucket: 'jurassic-pork.appspot.com',
  messagingSenderId: '137446068910',
};

if (!Firebase.apps.length) {
  Firebase.initializeApp(config);
}

app.use((req, res, next) => {
  res.locals.Firebase = Firebase;
  next();
});

// GET request at endpoint '/'
app.use('/', routes);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

/* Development Error Handler - Prints stack trace */
app.use(errorHandlers.developmentErrors);

// production error handler
app.use(errorHandlers.productionErrors);

module.exports.handler = serverless(app);
