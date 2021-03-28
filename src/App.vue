<template>
  <div id="app">
    <Header />
    <HelloWorld msg="Hoc viec"/>
    <ItemCarousel/>
    <ListComponent/>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import ItemCarousel from './components/Carousel'
import ListComponent from "./components/ListComponent"
export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    ItemCarousel,
    ListComponent
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
</style>
