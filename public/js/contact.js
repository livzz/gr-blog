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
      console.log("Name: ", this.name);
      console.log("Email: ", this.email);
      console.log("Reason: ", this.reason);
      console.log("Message: ", this.message);
    }
  }
});
