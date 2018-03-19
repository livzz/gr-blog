const Firebase = require('firebase');

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

module.exports = Firebase;
