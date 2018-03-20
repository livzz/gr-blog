exports.firebaseMiddleware = (req, res, next) => {
  res.locals.firebase
    .database()
    .ref()
    .once('value')
    .then(snap => snap.val())
    .then(data => {
      for (let item in data) {
        if (data[item].slug === req.params.slug) {
          return data[item];
        }
      }
    })
    .then(data => (req.data = data))
    .then(() => next());
};

exports.main = (req, res) => {
  res.render('post', {
    data: req.data
  });
};
