exports.firebaseMiddleware = (req, res, next) => {
  res.locals.firebase
    .database()
    .ref()
    .once('value')
    .then(snap => snap.val())
    .then(data => {
      let list = [];
      for (let item in data) {
        if (data[item].category === req.path.slice(1)) {
          list.push(data[item]);
        }
      }
      return list;
    })
    .then(data => (req.data = data))
    .then(() => next());
};

exports.main = (req, res) => {
  res.render('index', {
    data: req.data
  });
};
