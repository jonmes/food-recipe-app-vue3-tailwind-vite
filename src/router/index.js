import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cook from '../views/Cook.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/cook',
        name: 'Cook',
        component: Cook
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router