import Vue from 'vue'
import {
  sync
} from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'

import VueFire from 'vuefire'
Vue.use(VueFire)

import 'firebaseui/dist/firebaseui.css'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)

import lineClamp from 'vue-line-clamp'
Vue.use(lineClamp, {})

sync(store, router)

import MdToolbarTall from './components/MdToolbarTall'
import MdToolbarSmall from './components/MdToolbarSmall'
 
Vue.component('md-toolbar-tall', MdToolbarTall)
Vue.component('md-toolbar-small', MdToolbarSmall)

const app = new Vue({
  router,
  store,
  ...App
})

export {
  app,
  router,
  store
}
