exports.firebaseMiddleware = (req, res, next) => {
  res.locals.firebase
    .database()
    .ref('blogs')
    .once('value')
    .then(snap => (req.data = snap.val()))
    .then(() => next());
  // req.data = 'Working';
};

exports.homePage = (req, res) => {
  res.render('index', {
    data: req.data,
  });
};
