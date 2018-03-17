const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
// const abroadController = require('../controllers/abroadControllers');
// const scholarshipController = require('../controllers/scholarshipControllers');
// const lifestyleController = require('../controllers/lifestyleControllers');
// const examsController = require('../controllers/examsControllers');
// const tipsController = require('../controllers/tipsControllers');
// const contactController = require('../controllers/contactControllers');

// Do work here
router.get('/', indexController.homePage);
router.get('/abroad', indexController.homePage);
router.get('/scholarship', indexController.homePage);
router.get('/lifestyle', indexController.homePage);
router.get('/exams', indexController.homePage);
router.get('/tips', indexController.homePage);
router.get('/contact', indexController.homePage);

module.exports = router;
