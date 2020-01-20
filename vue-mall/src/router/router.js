import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home.vue'
import Category from "../views/Category/Category"
import Shop from '../views/Shop/Shop.vue'
import Mine from "../views/Mine/Mine"
import Login from "../views/Login/Login"

Vue.use(Router)

const router =  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/category',
            name: 'category',
            component: Category
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/mine',
            name: 'mine',
            meta : {
                auth: true
            },
            component: Mine
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ]
})

//路由守卫
router.beforeEach((to, from ,next) => {
    if(to.meta.auth){
        // 需要登录
        const token = localStorage.getItem('token');
        if(token){
            next();
        }else{
            next({
                path : '/login',
                query : {redirect : to.path}
            })
        }
    }else{  //不需要登录验证
        next();
    }
})

export default router;
