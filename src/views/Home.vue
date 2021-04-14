<template>
  <div class="home">
    <Header/>
    <Footer/>
    <Body/>
  </div>
</template>

<script>
// @ is an alias to /src
import Body from '@/components/Body.vue'
import Footer from '@/components/Footer.vue'
import Header from '../components/Header.vue'
export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Body
  }
}
</script>
