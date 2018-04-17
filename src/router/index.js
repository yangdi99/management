import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home/home.vue'
import plan from '@/view/plan/plan.vue'
import unit from '@/view/unit/unit.vue'
import login from '@/view/login/login.vue'
import workbox from '@/view/workbox/workbox.vue'
import newbuilt from '@/view/newbuilt/newbuilt.vue'
import datacenter from '@/view/datacenter/datacenter.vue'
import creativity from '@/view/creativity/creativity.vue'
import cell from '@/view/newbuilt/cell/cell.vue'
import establish from '@/view/newbuilt/establish/establish.vue'
import originality from '@/view/newbuilt/originality/originality.vue'
import store from '../store/store.js'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/newbuilt',
      name: 'newbuilt',
      component: newbuilt,
      children: [
        {
          path: '',
          redirect: '/newbuilt/establish'
        },
        {
          path: '/newbuilt/cell',
          name: 'cell',
          component: cell
        },
        {
          path: '/newbuilt/establish',
          name: 'establish',
          component: establish
        },
        {
          path: '/newbuilt/originality',
          name: 'originality',
          component: originality
        }
      ]
    },
    {
      path: '/plan',
      name: 'plan',
      component: plan
    },
    {
      path: '/unit',
      name: 'unit',
      component: unit
    },
    {
      path: '/creativity',
      name: 'creativity',
      component: creativity
    },
    {
      path: '/datacenter',
      name: 'datacenter',
      component: datacenter
    },
    {
      path: '/workbox',
      name: 'workbox',
      component: workbox
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  let islogin = routeToken()
  if (to.name === 'login') {
    next()
  } else {
    if (!islogin) {
      next('/login')
    } else {
      next()
    }
  }
})

function routeToken () {
  let tkn = localStorage.getItem('token')
  if (tkn) {
    console.log(store)
    store.commit('saveUser', localStorage.getItem('username'))
  }
  return !!tkn
}
export default router
