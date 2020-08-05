<template lang="html">

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close"  v-on:click="close">&times;</span>
    <p>Thank you!</p>
  </div>

</div>

</template>

<script lang="js">

  export default  {
    name: 'modal',
    props: ['shouldDisplayModal'],
    mounted () {

    },
    data () {
      return {
        displayModal: true

      }
    },
    methods: {
      close: function() {
        this.$emit('childToParent')
      }

    },
    computed: {

    }
}


</script>

<style>
.hideModal
{ 
  display: none;
}
/* The Modal (background) */
.modal {
   /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
