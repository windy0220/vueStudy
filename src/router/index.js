import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Right1 from '@/components/right1'
import Right2 from '@/components/right2'
import Left from '@/components/left'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    alias:'/newHome',
    components: {
      left:Left,
      right:Right1
    }
  },
  {
    path: '/r1/:newsTit/:newsContent',
    name: 'r1',
    alias:'/aliaslink/:newsTit/:newsContent',
    components: {
      left:Left,
      right:Right2
    }
  },
  {
    path: '/redi',
    redirect:'/'
  },
  {
    path: '/redip/:newsTit/:newsContent',
    redirect:'/r1/:newsTit/:newsContent'
  },
  {
    path: '*',
    component: Error
  }
]
})
