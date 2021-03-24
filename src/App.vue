<template>
  <div id="app">
    <!-- <Header />
    <HelloWorld msg="Hoc viec"/> -->
    <Body />
    
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Header from './components/Header'
import Body from './components/Body'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Header,
    Body,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#carousel {
  width: 900px;
  margin: 0 auto;
}
</style>
