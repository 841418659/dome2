import Vue from 'vue'
import Router from 'vue-router'

import sign from '@/components/sign'
import index from '../view/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {path: "*",redirect: "/home.html" },
    { path: '/home.html', name: 'index',component: index
      ,children: [
        //{path:'/',component:sign},
         {path: 'sign',component: sign }
      ]
    },
   // { path: '/home.html/sign',name: 'sign', component: sign },
  ]
})
