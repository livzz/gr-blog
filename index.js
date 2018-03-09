const serverless = require('serverless-http');
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const Firebase = require('firebase');
const app = express();

app.use(bodyParser.json());

var config = {
  apiKey: 'AIzaSyAx0_nw4HxTFN09xz2ctPvxqx2dSCY1ek8',
  authDomain: 'jurassic-pork.firebaseapp.com',
  databaseURL: 'https://jurassic-pork.firebaseio.com',
  projectId: 'jurassic-pork',
  storageBucket: 'jurassic-pork.appspot.com',
  messagingSenderId: '137446068910'
};

// Get request at endpoint '/otp'
app.get('/otp', function(req, res) {
  if (!Firebase.apps.length) {
    Firebase.initializeApp(config);
  }

  const otp = {
    phone: req.query.phone,
    otp: getRandomInt(100000, 999999)
  };

  const otpRef = Firebase.database()
    .ref()
    .child('otp');

  otpRef.once('value', snap => {
    if (!snap.hasChild(otp.phone)) {
      otpRef
        .child(otp.phone)
        .set(otp.otp)
        .then(function(data) {
          send(otp, res);
        })
        .catch(function(error) {
          console.log('Firebase error: ', error);
          res.send(error);
        });
    } else {
      otp.otp = snap.child(otp.phone).val();
      send(otp, res);
    }
  });
});

// Function for sending OTP
function send(otp, res) {
  const one = axios({
    method: 'post',
    url: 'http://api.msg91.com/api/v2/sendsms',
    data: {
      sender: 'DROIDV',
      route: 4,
      country: 91,
      sms: [
        {
          message: `Your OTP is ${
            otp.otp
          }.\\n \\nBuild mCommerce Android App for your local business. Visit www.droidvue.com for more info.`,
          to: [otp.phone]
        }
      ]
    },
    headers: {
      authkey: '186040AerD5q0EK65a1eac93',
      'Content-Type': 'application/json'
    }
  });

  one.then(response => res.send(response.data)).catch(err => {
    console.log(err);
    if (err.response.data) {
      res.send(err.response.data);
    } else {
      console.log(err);
    }
  });
}

// POST request at endpoint '/jp'
app.post('/jp', function(req, res) {
  console.log(req.body);

  const one = axios({
    method: 'post',
    url: 'http://api.msg91.com/api/v2/sendsms',
    data: {
      sender: 'JPJHRT',
      route: 4,
      country: 91,
      sms: [
        {
          message: 'A new order is received!!',
          to: [9127875393, 9954925044]
        }
      ]
    },
    headers: {
      authkey: '186040AerD5q0EK65a1eac93',
      'Content-Type': 'application/json'
    }
  });

  const two = axios.get(
    'http://api.timezonedb.com/v2/get-time-zone?key=0RHNXGDMQ3FW&format=json&by=zone&zone=Asia/Kolkata'
  );

  one
    .then(() => two)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      if (err.response.data) {
        res.send(err.response.data);
      } else {
        console.log(err);
        res.send(err);
      }
    });
});

// GET request at endpoint '/'
app.get('/', function(req, res) {
  const b = {
    response: 'Hello World'
  };

  res.send(b);
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.handler = serverless(app);
