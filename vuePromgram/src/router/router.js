import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/view/Login'
import Room from '@/components/view/Room'
import Index from '@/components/view/Index'
import Register from '@/components/common/Register'

Vue.use(VueRouter)

var router = new VueRouter({
   routes: [
      {
         path: '/login',
         name: 'Login',
         component: Login
      },
      {
         path: '/room',
         name: 'Room',
         component: Room,
         meta:{
            requireAuth:true
         }
      },
      {
         path: '/index',
         name: 'Index',
         component: Index
      },
      {
         path: '/register',
         name: 'Register',
         component: Register
      }
   ]
})

export default router;
