const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const abroadController = require('../controllers/abroadController');
const scholarshipController = require('../controllers/scholarshipController');
const lifestyleController = require('../controllers/lifestyleController');
const examsController = require('../controllers/examsController');
const tipsController = require('../controllers/tipsController');
const contactController = require('../controllers/contactController');
const postController = require('../controllers/postController');

// Do work here
router.get('/', indexController.firebaseMiddleware, indexController.homePage);
router.get(
  '/abroad',
  abroadController.firebaseMiddleware,
  abroadController.main
);
router.get(
  '/scholarship',
  scholarshipController.firebaseMiddleware,
  scholarshipController.main
);
router.get(
  '/lifestyle',
  scholarshipController.firebaseMiddleware,
  scholarshipController.main
);
router.get('/exams', examsController.firebaseMiddleware, examsController.main);
router.get('/tips', tipsController.firebaseMiddleware, tipsController.main);
router.get('/contact', indexController.homePage);
router.get(
  '/post/:slug',
  postController.firebaseMiddleware,
  postController.main
);

module.exports = router;
