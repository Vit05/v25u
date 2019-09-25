import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Home from '../views/Home.vue'
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import Product from "../views/Products/Product";
import ProductList from "../views/Products/ProductList";
import NewProduct from "../views/Products/NewProduct";
import Checkout from "../views/User/Checkout";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/product/:id',
            props: true,
            name: 'product',
            component: Product
        },
        {
            path: '/list',
            name: 'list',
            component: ProductList,
            beforeEnter: AuthGuard
        },
        {
            path: '/new',
            name: 'new',
            component: NewProduct,
            beforeEnter: AuthGuard

        },
        {
            path: '/checkout',
            name: 'checkout',
            component: Checkout,
            beforeEnter: AuthGuard

        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        }
    ],
    mode: 'history'
})
