exports.firebaseMiddleware = (req, res, next) => {
  res.locals.firebase
    .database()
    .ref()
    .once("value")
    .then(snap => snap.val())
    .then(data => {
      req.list = data;
      return data;
    })
    .then(data => {
      for (let item in data) {
        if (data[item].type === "featured") {
          req.featured = data[item];
          return data;
        }
      }
    })
    .then(data => {
      let list = [];
      for (let item in data) {
        if (data[item].category === req.path.slice(1)) {
          list.push(data[item]);
        }
      }
      req.data = list;
      return;
    })
    .then(() => next());
};

exports.main = (req, res) => {
  res.render("index", {
    data: req.data,
    list: req.list,
    featured: req.featured
  });
};
