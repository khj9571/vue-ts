import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import(/* webpackChunkName: "about" */ './views/Posts.vue'),


      // // 중첩된 라우트는 children 속성으로 하위 라우트를 정의할 수 있다.
      children: [
        {
          path: 'child1', name: 'child1',
          component: () => import(/* webpackChunkName: "about" */ './views/Child1.vue')
        },
        { path: 'child2', name: 'child2', component: { template: '<div>Post Detail</div>' } }
      ]
    }

  ]
})
