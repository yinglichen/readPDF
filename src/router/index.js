import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import readPdf from '@/components/readPdf'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path:'/readPdf',
      name:'readPdf',
      component:readPdf
    }
  ]
})
