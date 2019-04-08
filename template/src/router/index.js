import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../view/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        requuireAuth: false,
      },
      component: homePage
    }
  ]
})

/**
 * 预留钩子
 */
router.beforeEach((to, from, next) => {
  if(to.meta.requuireAuth) {
    if (localStorage.getItem('userName') !== null) {
      next();
    } else {
      alert('please login')
      next({
        path: '/'
      })
    }
  } else {
    next();
  }
})


