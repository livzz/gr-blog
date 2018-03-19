const Firebase = require('firebase');

var config = {
  apiKey: 'AIzaSyCvGB9LKTvtVn8LOx0j_d7anLz27eIVk90',
  authDomain: 'gr-blog-42a8e.firebaseapp.com',
  databaseURL: 'https://gr-blog-42a8e.firebaseio.com',
  projectId: 'gr-blog-42a8e',
  storageBucket: 'gr-blog-42a8e.appspot.com',
  messagingSenderId: '51529782072',
};

if (!Firebase.apps.length) {
  Firebase.initializeApp(config);
}

module.exports = Firebase;
