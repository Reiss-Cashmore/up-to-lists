import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import List from '../views/List'
import Auth from '../views/Auth.vue'
import CreateList from '../views/CreateList.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },    {
      path: '/list/:id',
      component: List,
      props: true
    },
    { path: '/auth', component: Auth },
    {
      path:'/create-list', component: CreateList
    }
  ]
})
