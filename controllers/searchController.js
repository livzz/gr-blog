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
      req.list = temp;
      return data;
    })
    .then(data => {
      let list = [];
      for (let item in data) {
        if (
          data[item].title
            .toLowerCase()
            .indexOf(req.query.post.toLowerCase()) !== -1
        ) {
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
    search: true
  });
};
