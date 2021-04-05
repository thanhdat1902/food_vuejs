<template>
  <div id="app">
    <Header />
    <Footer />
    <Body />
    
    <!-- <HelloWorld msg="Hoc viec"/> -->
    
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    Footer,
    Header,
    Body,
  }
}
</script>

<style>
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
