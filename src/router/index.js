import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Right1 from '@/components/right1'
import Right2 from '@/components/right2'
import Left from '@/components/left'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    components: {
      left:Left,
      right:Right1
    }
  },
  {
    path: '/r1/:newsTit/:newsContent',
    name: 'r1',
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
  }
]
})
