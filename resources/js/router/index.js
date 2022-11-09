import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

/* Guest Component */
const Home = () => import('@/components/ExampleComponent.vue')
const Login = () => import('@/components/Login.vue')
const Register = () => import('@/components/Register.vue')
/* Guest Component */

/* Layouts */
const DahboardLayout = () => import('@/components/admin/layouts/Default.vue')
/* Layouts */

/* Authenticated Component */
const Dashboard = () => import('@/components/admin/Dashboard.vue')
/* Authenticated Component */


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          requiresAuth: false,
        },
    },
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            requiresAuth: false,
        }
    },
    {
        name: "register",
        path: "/register",
        component: Register,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/admin",
        component: DahboardLayout,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                name: "dashboard",
                path: '/admin',
                component: Dashboard,
                meta: {
                    title: `Dashboard`
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (store.state.auth.authenticated) {
        next();
      } else {
        alert('Auth required!')
        next("/login");
      }
    } else {
      next();
    }
});

// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title
//     if (to.meta.middleware == "guest") {
//         if (store.state.auth.authenticated) {
//             next({ name: "dashboard" })
//         }
//         next()
//     } else {
//         if (store.state.auth.authenticated) {
//             next()
//         } else {
//             next({ name: "login" })
//         }
//     }
// })

export default router