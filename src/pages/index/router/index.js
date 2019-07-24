import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sign from '@/components/sign'
import index from '../view/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '*',name: 'HelloWorld', component: HelloWorld },
    { path: '/index.html',name: 'index',component: index
    ,children: [
      {path: 'sign',component: sign }]
    },
   // { path: '/index.html/sign',name: 'sign', component: sign },

  ]
})
