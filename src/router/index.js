import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: () =>
      import('../components/User/AboutMe.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () =>
      import('../components/User/Projects.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () =>
      import('../components/User/Skills.vue')
    }
  ]
})
