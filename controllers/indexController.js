exports.firebaseMiddleware = (req, res, next) => {
  res.locals.firebase
    .database()
    .ref("blogs")
    .once("value")
    .then(snap => snap.val())
    .then(data => {
      let temp = [];
      for (let item in data) {
        temp.push(data[item]);
      }
      req.data = temp;
      req.list = temp;
      return data;
    })
    .then(data => {
      for (let item in data) {
        if (data[item].type === 0) {
          req.featured = data[item];
          return;
        }
      }
    })
    .then(() => next());
};

exports.homePage = (req, res) => {
  res.render("index", {
    data: req.data,
    list: req.data,
    featured: req.featured
  });
};
