<template>
  <div class="hello">
  <form action="/action_page.php">
  <label for="fname">{{labels.fName}}</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">{{labels.lName}}</label><br>
  <input type="text" id="lname" name="lname"><br>
  <label for="email">{{labels.email}}</label><br>
  <input type="text" id="email" name="email"><br>
  <button type="button">{{labels.submit}}</button>
</form> 
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      labels: {
        fName: "First Name:",
        lName: "Last Name:",
        email: "Email:",
        submit: "Submit"
      }
    }
  },
  methods: {
    submit: function() {
      console.log("Called");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
