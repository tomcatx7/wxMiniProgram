// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store.js'

Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
   if (to.meta.requireAuth) {
     console.log("required",localStorage)
      if (localStorage.getItem('userName')) {
         next();
      } else {
         next({
            path: '/login',
            query: { redirect: to.fullPath }
         })
      }
   }else{
     next()
   }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data(){
    return {
    }
  },
  store,
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})


