new Vue({
  el: "#app",
  data: {
    name: "",
    email: "",
    subject: "",
    message: ""
  },
  methods: {
    send: function() {
      if (
        this.name === "" ||
        this.email === "" ||
        this.subject === "" ||
        this.message === ""
      ) {
        toastr.error("None of the fields can be empty!!");
      } else {
        toastr.success("We will get in touch soon!!");
      }
    }
  }
});
