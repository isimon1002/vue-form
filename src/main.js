import Vue from 'vue'
import App from './App.vue'
import Modal from './components/modal'

Vue.config.productionTip = false
Vue.component('modal', Modal);
new Vue({
  render: h => h(App),
}).$mount('#app')
