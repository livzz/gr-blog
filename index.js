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

var config = {
  apiKey: 'AIzaSyAx0_nw4HxTFN09xz2ctPvxqx2dSCY1ek8',
  authDomain: 'jurassic-pork.firebaseapp.com',
  databaseURL: 'https://jurassic-pork.firebaseio.com',
  projectId: 'jurassic-pork',
  storageBucket: 'jurassic-pork.appspot.com',
  messagingSenderId: '137446068910',
};

// GET request at endpoint '/'
app.use('/', routes);

module.exports.handler = serverless(app);
