import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
//If you not install the Vue Compotion API, please
//commented out above import and use statement, 
//or proceed to https://www.npmjs.com/package/@vue/composition-api
//to install

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
