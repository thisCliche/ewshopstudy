import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('../views/home/Home.vue');
const Category = () => import('../views/category/Category.vue');
const Profile = () => import('../views/profile/Profile.vue');
const ShopCart = () => import('../views/shopcart/ShopCart.vue');
const Detail = () => import('../views/detail/Detail.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'DefaultHome',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
