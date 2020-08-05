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
 <modal v-on:childToParent="onCloseModal" v-if="this.hasReturnedOk && !hasChildClosedModal"></modal>
 </div>
</template>

<script>
import axios from "axios";

export default {
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
      hasReturnedOk: false,
      hasChildClosedModal: false
    }
  },
  methods: {
    submit: function() {
      this.validate();
      if (!this.isFNInvalid && !this.isLNInvalid && !this.isEmailInvalid) {
        this.hitEndpoint();
        this.hasChildClosedModal = false;
      }


    },

    validate: function() {
      this.inputs.fName === null || this.inputs.fName === "" ? this.isFNInvalid = true: this.isFNInvalid = false;
      this.inputs.lName === null || this.inputs.lName === "" ? this.isLNInvalid = true: this.isLNInvalid = false;
      this.inputs.email === null || this.inputs.email === ""? this.isEmailInvalid = true: this.isEmailInvalid = false;
    },

    hitEndpoint: function() {
      axios.get("https://reqres.in/api/products/3")
      .then(response => this.hasReturnedOk = response.status === 200);
    },

    onCloseModal: function() {
      this.hasChildClosedModal = true;
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
