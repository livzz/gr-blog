'use strict';

const path = require('path');
const serverless = require('serverless-http');
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const Firebase = require('firebase');
const app = express();

const routes = require('./routes/index');
// const errorHandlers = require('./handlers/errorHandlers');

app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var config = {
  apiKey: 'AIzaSyA70K08qV46ap3yeQX3lIEM3NxgTIco_6c',
  authDomain: 'mowglitrails-1512388008487.firebaseapp.com',
  databaseURL: 'https://mowglitrails-1512388008487.firebaseio.com',
  projectId: 'mowglitrails-1512388008487',
  storageBucket: 'mowglitrails-1512388008487.appspot.com',
  messagingSenderId: '466354595530',
};

if (!Firebase.apps.length) {
  Firebase.initializeApp(config);
}

app.use((req, res, next) => {
  res.locals.firebase = Firebase;
  res.locals.currentPath = req.path;
  next();
});

// GET request at endpoint '/'
app.use('/', routes);

// // If that above routes didnt work, we 404 them and forward to error handler
// app.use(errorHandlers.notFound);

// /* Development Error Handler - Prints stack trace */
// app.use(errorHandlers.developmentErrors);

// // production error handler
// app.use(errorHandlers.productionErrors);

module.exports.handler = serverless(app);
