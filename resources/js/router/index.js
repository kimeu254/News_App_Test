import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

/* Guest Component */
const Home = () => import('@/components/public/Home.vue')
const Login = () => import('@/components/admin/Login.vue')
const Register = () => import('@/components/admin/Register.vue')
/* Guest Component */

/* Layouts */
const DahboardLayout = () => import('@/components/admin/layouts/Default.vue')
const HomeLayout = () => import('@/components/public/layouts/Default.vue')
/* Layouts */

/* Authenticated Component */
const Dashboard = () => import('@/components/admin/Dashboard.vue')
const Regions = () => import('@/components/admin/Regions.vue')
const PostNews = () => import('@/components/admin/news/Post.vue')
const SouthEasternNews = () => import('@/components/admin/news/SouthEasternNews.vue')
const NationalNews = () => import('@/components/admin/news/NationalNews.vue')
const InternationalNews = () => import('@/components/admin/news/InternationalNews.vue')
const Business = () => import('@/components/admin/categories/business/Business.vue')
const Lifestyle = () => import('@/components/admin/categories/lifestyle/Lifestyle.vue')
const Politics = () => import('@/components/admin/categories/politics/Politics.vue')
const Sports = () => import('@/components/admin/categories/sports/Sports.vue')
/* Authenticated Component */


const routes = [
    {
        path: "/",
        component: HomeLayout,
        meta: {
          requiresAuth: false,
        },
        children: [
            {
                name: "home",
                path: '/',
                component: Home,
                meta: {
                    title: `Home`
                }
            },
        ]
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
        path: "/Admin",
        component: DahboardLayout,
        meta: {
            requiresAuth: true,
        },
        children: [
            /* Dashboard */
            {
                name: "dashboard",
                path: '/Admin',
                component: Dashboard,
                meta: {
                    title: `Dashboard`
                }
            },

            /* Dashboard */


            /* Areas */
            {
                name: "regions",
                path: '/Admin/Regions',
                component: Regions,
                meta: {
                    title: `Regions`
                }
            },

            /* Areas */


            /* News */
            {
                name: "postNews",
                path: '/Admin/News/Post',
                component: PostNews,
                meta: {
                    title: `PostNews`
                }
            },
            {
                name: "southEasternNews",
                path: '/Admin/News/SouthEastern',
                component: SouthEasternNews,
                meta: {
                    title: `SouthEasternNews`
                }
            },
            {
                name: "nationalNews",
                path: '/Admin/News/National',
                component: NationalNews,
                meta: {
                    title: `NationalNews`
                }
            },
            {
                name: "internationalNews",
                path: '/Admin/News/International',
                component: InternationalNews,
                meta: {
                    title: `InternationalNews`
                }
            },

            /* News */


            /* Categories */
            {
                name: "business",
                path: '/Admin/Categories/Business',
                component: Business,
                meta: {
                    title: `Business`
                }
            },
            {
                name: "lifestyle",
                path: '/Admin/Categories/Lifestyle',
                component: Lifestyle,
                meta: {
                    title: `Lifestyle`
                }
            },
            {
                name: "politics",
                path: '/Admin/Categories/Politics',
                component: Politics,
                meta: {
                    title: `Politics`
                }
            },
            {
                name: "sports",
                path: '/Admin/Categories/Sports',
                component: Sports,
                meta: {
                    title: `Sports`
                }
            },
            /* Categories */
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