import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import router from './router'

Vue.use(VueCompositionAPI)
//If you not install the Vue Composition API, please
//commented out above import and use statement, 
//or proceed to https://www.npmjs.com/package/@vue/composition-api to install

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
