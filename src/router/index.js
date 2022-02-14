import { createRouter, createWebHistory } from 'vue-router'
import { authGuard, signIn } from "../auth";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cook from '../views/Cook.vue'
import Profile from '../views/Profile.vue'
import ImageUpload from '../components/ImageUpload.vue'
// import Details from '../views/Details.vue'
import Browse from '../views/Browse.vue'
import Favorites from '../views/Favorites.vue'
// import routes from "~pages";

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
        meta: { auth: true },
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { auth: true },
    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: Favorites,
        meta: { auth: true },
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
        meta: { auth: true },
    },
    {
        path: '/browse',
        name: 'Browse',
        component: Browse,
        meta: { auth: true },
    }
]




const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach(async (to, from, next) => {
    console.log(`from ${from.fullPath} to ${to.fullPath}`);


    if(!to.meta.auth){
        next()
    }else{
        await (await authGuard(to, from, next)).go
    }


    // if (!to.meta.auth) {
    //   console.log("router -- auth NOT Required");
    //   next();
    // } else {
    //   console.log("router -- auth Required");
    //   if(await authGuard(to, from, next).vld){
    //       next();
    //   }else{
    //       await signIn()
    //       await (await authGuard(to, from, next)).go
    //   }

    // }
  });

export default router
