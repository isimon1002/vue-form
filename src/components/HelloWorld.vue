<template>
  <div class="hello">
  <form action="/action_page.php">
  <label for="fname">{{labels.fName}}</label><br>
  <input type="text" v-bind:class="{ invalid: isFNInvalid }" id="fname" name="fname" v-model="inputs.fName"><br>
  <label for="lname">{{labels.lName}}</label><br>
  <input type="text" v-bind:class="{ invalid: isLNInvalid }" id="lname" name="lname" v-model="inputs.lName"><br>
  <label for="email">{{labels.email}}</label><br>
  <input type="text" v-bind:class="{ invalid: isEmailInvalid }" id="email" name="email" v-model="inputs.email"><br>
  <button type="button" v-on:click="submit">{{labels.submit}}</button>
</form> 
<div v-bind:class="{ showModal: true }">
<h1> Thank You! </h1>
</div>
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
      },
      inputs: {
        fName: null,
        lName: null,
        email: null
      },
      isFNInvalid: false,
      isLNInvalid: false,
      isEmailInvalid: false,
      hasReturnedOk: false
    }
  },
  methods: {
    submit: function() {
      this.validate();
      if (!this.isFNInvalid && !this.isLNInvalid && !this.isEmailInvalid) {
        this.hitEndpoint();
      }


    },

    validate: function() {
      this.inputs.fName === null || this.inputs.fName === "" ? this.isFNInvalid = true: this.isFNInvalid = false;
      this.inputs.lName === null || this.inputs.lName === "" ? this.isLNInvalid = true: this.isLNInvalid = false;
      this.inputs.email === null || this.inputs.email === ""? this.isEmailInvalid = true: this.isEmailInvalid = false;
    },

    hitEndpoint: function() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://reqres.in/api/products/3", true);
      xhr.onload = function(){
        xhr.status === 200 ? this.hasReturnedOk = true: this.hasReturnedOk = false; 
              console.log(this.hasReturnedOk, xhr.status === 200);
      };
      xhr.send();
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

.invalid {
  border: 1px solid red;
}

.showModal {
  display: block;
  z-index: 1;
  border: 1px solid #888;
}
</style>
