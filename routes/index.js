const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
const abroadController = require("../controllers/abroadController");
const scholarshipController = require("../controllers/scholarshipController");
const lifestyleController = require("../controllers/lifestyleController");
const examsController = require("../controllers/examsController");
const tipsController = require("../controllers/tipsController");
const contactController = require("../controllers/contactController");
const postController = require("../controllers/postController");
const sharedController = require("../controllers/sharedControllers");

// Do work here
router.get("/", indexController.firebaseMiddleware, indexController.homePage);
router.get(
  "/abroad",
  sharedController.firebaseMiddleware,
  sharedController.main
);
router.get(
  "/scholarship",
  sharedController.firebaseMiddleware,
  sharedController.main
);
router.get(
  "/lifestyle",
  sharedController.firebaseMiddleware,
  sharedController.main
);
router.get(
  "/exams",
  sharedController.firebaseMiddleware,
  sharedController.main
);
router.get("/tips", sharedController.firebaseMiddleware, sharedController.main);
router.get("/contact", contactController.main);
router.get(
  "/post/:slug",
  postController.firebaseMiddleware,
  postController.main
);

module.exports = router;
