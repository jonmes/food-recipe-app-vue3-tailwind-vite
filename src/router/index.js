import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cook from '../views/Cook.vue'
import Profile from '../views/Profile.vue'
import ImageUpload from '../components/ImageUpload.vue'
// import Details from '../views/Details.vue'
import Browse from '../views/Browse.vue'
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
        component: Cook,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/image-upload',
        name: 'Image-upload',
        component: ImageUpload,
    },
    {
        path: '/details',
        name: 'Details',
        component: () => import (/*webpackChunckName: "Details" */ "../views/Details.vue"),
    },
    {
        path: '/browse',
        name: 'Browse',
        component: Browse
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
