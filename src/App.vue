<template>
  <div id="app">
    <Header />
    <Body />
    <!-- <HelloWorld msg="Hoc viec"/> -->
    
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import Body from './components/Body'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    Header,
    Body,
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp");

* {
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
