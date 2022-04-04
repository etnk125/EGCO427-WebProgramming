import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'
import MovieList from '../components/MovieList.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'

//const routerHistory = createWebHistory()

const routes = [
    {
        path: '/',
        redirect: '/signin'
      },
      {
        path: '/:catchAll(.*)',
        redirect: '/signin'
      },
      {
        path: '/movies',
        name: 'MovieList',
        component: MovieList,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: '/signup',
        name: 'Signp',
        component: SignUp
      }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})


router.beforeEach((to, from, next) => {
    const currentUser = getAuth().currentUser
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth && !currentUser) {
      console.log("You are not authorized to access this area.");
      next('signin')
    } else if (!requiresAuth && currentUser) {
      console.log("You are authorized to access this area.");
      next('movies')
    } else {
      next()
    }
  })

export default router