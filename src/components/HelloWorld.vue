<template>
  <div class="hello">
    <h1 class="message">{{ msg }}</h1>
    <button v-on:click = "handleClick">Doi mau</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  nameToDisplay: '',
  props: {
    msg: String
  },
  methods: {
    handleClick: function() {
      this.msg = "cho Tai"
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  color : red;
}
</style>
