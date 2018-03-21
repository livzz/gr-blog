exports.firebaseMiddleware = (req, res, next) => {
  res.locals.firebase
    .database()
    .ref()
    .once("value")
    .then(snap => snap.val())
    .then(data => {
      req.data = data;
      req.list = data;
      for (let item in data) {
        if (data[item].type === "featured") {
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
