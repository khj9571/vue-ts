import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AppMain from '@/layouts/AppMain.vue'

Vue.use(Router)
//   redirect: '/dashboard',
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },

    {
      // path: '/',
      // name: 'home',
      // component: Home
      path: '/',
      component: AppMain,
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import(/* webpackChunkName: "guide" */ '@/views/Home.vue'),
          // name: 'Guide',
          // meta: {
          //   title: 'guide',
          //   icon: 'guide',
          //   noCache: true
          // }
        }
      ]
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
    },
    {
      path: '/sample',
      name: 'sample',
      // component: () => import(/* webpackChunkName: "about" */ './views/samples/Index.vue'),
      component: AppMain,
      children: [
        {
          path: 'api', name: 'api',
          component: () => import(/* webpackChunkName: "about" */ './views/samples/ApiExam.vue')
        },
        {
          path: 'filter', name: 'filter',
          component: () => import(/* webpackChunkName: "about" */ './views/samples/FilterExam.vue')
        },
        {
          path: 'directive', name: 'directive',
          component: () => import(/* webpackChunkName: "about" */ './views/samples/DirectiveExam.vue')
        },
        {
          path: 'form', name: 'form',
          component: () => import(/* webpackChunkName: "about" */ './views/samples/FormExam.vue')
        },
        {
          path: 'table', name: 'table',
          component: () => import(/* webpackChunkName: "about" */ './views/samples/TableExam.vue')
        },
        {
          path: 'mask', name: 'mask',
          component: () => import(/* webpackChunkName: "about" */ './views/samples/MaskExam.vue')
        },
        {
          path: 'store', name: 'store',
          component: () => import(/* webpackChunkName: "about" */ './views/samples/StoreExam.vue')
        },
        {
          path: 'utils', name: 'utils',
          component: () => import(/* webpackChunkName: "about" */ './views/samples/UtilsExam.vue')
        }
      ]
    }

  ]
})
