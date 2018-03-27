exports.firebaseMiddleware = (req, res, next) => {
  res.locals.firebase
    .database()
    .ref("blogs")
    .once("value")
    .then(snap => snap.val())
    .then(data => {
      // req.next = null;
      // req.earlier = null;
      let found = false;
      for (let item in data) {
        if (data[item].slug === req.params.slug) {
          req.data = data[item];
          found = true;
        } else if (found) {
          req.nextPost = data[item];
          return;
        } else {
          req.earlierPost = data[item];
        }
      }
    })
    .then(() => next());
};

exports.main = (req, res) => {
  res.render("post", {
    data: req.data,
    earlier: req.earlierPost,
    next: req.nextPost
  });
};
