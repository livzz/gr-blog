var config = {
  apiKey: "AIzaSyCvGB9LKTvtVn8LOx0j_d7anLz27eIVk90",
  authDomain: "gr-blog-42a8e.firebaseapp.com",
  databaseURL: "https://gr-blog-42a8e.firebaseio.com",
  projectId: "gr-blog-42a8e",
  storageBucket: "gr-blog-42a8e.appspot.com",
  messagingSenderId: "51529782072"
};
firebase.initializeApp(config);

new Vue({
  el: "#app",
  data: {
    name: "",
    email: "",
    subject: "",
    message: ""
  },
  methods: {
    send: function(e) {
      e.preventDefault();
      if (
        this.name === "" ||
        this.email === "" ||
        this.subject === "" ||
        this.message === ""
      ) {
        toastr.error("None of the fields can be empty!!");
      } else {
        firebase
          .database()
          .ref("contacts")
          .push({
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message
          })
          .then(toastr.success("We will get in touch soon!!"));
      }
    }
  }
});
