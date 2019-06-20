import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueParticles from 'vue-particles'

Vue.use(Vuetify)
Vue.use(VueParticles)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
