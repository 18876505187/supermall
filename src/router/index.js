import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../pages/home/Home')
const Category = () => import('../pages/category/Category')
const Cart = () => import('../pages/cart/Cart')
const Profile = () => import('../pages/profile/Profile')

//1、安装插件
Vue.use(VueRouter)

//2、创建路由对象
const  routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes
})

//3、导出router
export default router
