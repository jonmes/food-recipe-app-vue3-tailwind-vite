<template>
    <div
        class="bg-gradient-to-r from-green-200 via-yellow-100 to-green-100 sticky top-0 z-20"
    >
        <nav
            class="flex max-w-screen-xl justify-between items-center py-6 px-6 mx-auto md:px-12 lg:px-16 xl:px-24"
        >
            <router-link
                :to="{ name: 'home' }"
                class="text-3xl md:text-4xl font-bold tracking-wide slideUp"
                @click="closeMenu"
            >
                <span
                    class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green relative inline-block"
                    ><span class="relative">r</span>
                    <span class="relative text-green-200">E</span>
                    <span class="relative">cipe</span>
                </span>
            </router-link>
            <div
                class="inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14"
                :class="sidebarOpen ? 'fixed flex' : 'hidden'"
            >
                <ul
                    class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8"
                >
                    <li
                        class="text-lg md:text-base lg:text-lg font-medium group"
                        :class="{ 'text-green': activeMenu === 'home' }"
                    >
                        <router-link :to="{ name: 'home' }" @click="closeMenu"
                            >Home</router-link
                        >
                        <div
                            class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
                        />
                    </li>
                    <li
                        class="text-lg md:text-base lg:text-lg font-medium group"
                        :class="{ 'text-green': activeMenu === 'about' }"
                    >
                        <router-link :to="{ name: 'Browse' }" @click="closeMenu">
                            Browse
                        </router-link>
                        <div
                            class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
                        />
                    </li>
                    <li
                        class="text-lg md:text-base lg:text-lg font-medium group"
                        :class="{ 'text-green': activeMenu === 'about' }"
                    >
                        <router-link :to="{ name: 'Cook' }" @click="closeMenu">
                            Cook
                        </router-link>
                        <div
                            class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
                        />
                    </li>
                    <li
                        class="text-lg md:text-base lg:text-lg font-medium group"
                        :class="{ 'text-green': activeMenu === 'about' }"
                    >
                        <router-link :to="{ name: 'About' }" @click="login">
                            About
                        </router-link>
                        <div
                            class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
                        />
                    </li>

                    <!-- <router-link
            class="flex justify-center items-center h-13 px-7 font-medium text-white bg-green rounded-xl hover:shadow-primary transition-shadow duration-300 whitespace-nowrap"
            :to="{ name: 'Home'}"
          >
            Explore recipes 🔎
          </router-link> -->
                    <!-- <router-link
            class="flex justify-center items-center w-full sm:w-auto h-13 px-8 font-medium text-gray-900 border border-gray-900 rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
            v-if="!authLoading"
            :to="{ name: 'Cook' }"
          >
            let's cook 👩‍🍳
          </router-link> -->

                    <li
                        class="text-lg md:text-base lg:text-lg font-medium group"
                        :class="{ 'text-green': activeMenu === 'Login/SignUp' }"
                        v-if="!authLoading"
                    >
                        <!-- <router-link to="/about" @click="checkMenu('Login/SignUp')">
            Login/SignUp
          </router-link> -->
                        <button v-if="!authenticated" @click="login">
                            Login
                        </button>
                        <!-- <button v-if="authenticated" @click="logout">
                            Logout
                        </button> -->

                        <!-- <div v-if="!authLoading">
          </div> -->
                        <!-- <p v-if="authenticated">Redirecting to Home...</p> -->
                        <!-- <div v-else @click="logout">Logout</div> -->
                        <div
                            class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
                        />
                    </li>
                    <li v-show="authenticated">
                        <!-- {{ nickname }} -->
                        <div class="action">
                            <div class="profile" @click="menuToggle">
                                <img
                                    class="inline object-cover w-8 h-8 rounded-full"
                                    src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                    alt="Profile image"
                                />
                            </div>
                            <div class="menu">
                                <h3>
                                    {{ nickname }}<br /><span
                                        >Website Designer</span
                                    >
                                </h3>
                                <ul>
                                    <li>
                                        <box-icon
                                            name="user"
                                            animation="burst-hover"
                                        >
                                            <i class="bx bx-user"></i>
                                        </box-icon>
                                        <router-link
                                            @click="closeMenu"
                                            :to="{ name: 'Profile' }"
                                            >My Profile</router-link
                                        >
                                    </li>
                                    <li>
                                        <box-icon
                                            name="cog"
                                            animation="spin-hover"
                                            ><i class="bx bx-cog"></i></box-icon
                                        ><a href="#">Settings</a>
                                    </li>
                                    <li>
                                        <box-icon
                                            name="bell"
                                            animation="tada-hover"
                                            ><i
                                                class="bx bxs-like bx-tada-hover"
                                            ></i
                                        ></box-icon>
                                        <a href="#">Notification</a>
                                    </li>
                                    <li>
                                        <box-icon
                                            name="log-out-circle"
                                            animation="fade-left-hover"
                                        >
                                            <i class="bx bx-log-out-circle"></i>
                                        </box-icon>
                                        <a href="#" @click="logout">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <button
                @click="sidebarOpen = !sidebarOpen"
                class="block md:hidden relative z-30"
            >
                <HamburgerIcon class="w-8 h-8 fill-current text-gray-900" />
            </button>
        </nav>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { signIn, signOut } from '../auth'
import { useRouter } from 'vue-router'

import HamburgerIcon from '../assets/icons/hamburger.svg'
const menus = ['Home', 'Browse', 'Cook', 'Contact']
const sidebarOpen = ref(false)
const activeMenu = 'Home'
const store = useStore()
const router = useRouter()

const authLoading = computed(() => store.getters['main/isLoading'])
const authenticated = computed(() => store.getters['main/isAuthenticated'])
const userData = computed(() => store.getters['main/user'])
let nickname = ref()

const login = async () => {
    await signIn()
    if (authenticated.value) {
        router.push({ name: 'home' })
        nickname.value = userData.value.nickname
    }
}
const logout = async () => {
    await signOut()
}
const menuToggle = () => {
    const toggleMenu = document.querySelector('.menu')
    toggleMenu.classList.toggle('active')
}
const closeMenu = () => {
    const toggleMenu = document.querySelector('.menu')
    toggleMenu.classList.remove('active')
}
</script>

<style scoped>
.action {
    position: fixed;
    top: -10px;
    right: -60px;
}
.action .profile {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
}
.action .profile img {
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 80%;
    object-fit: cover;
}
.action .menu {
    position: absolute;
    top: 60px;
    right: -10px;
    padding: 10px 20px;
    background: #fff;
    width: 200px;
    box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    transition: 0.5s;
    visibility: hidden;
    opacity: 0;
}
.action .menu.active {
    visibility: visible;
    opacity: 1;
}
.action .menu::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 28px;
    width: 20px;
    height: 20px;
    background: #fff;
    transform: rotate(45deg);
}
.action .menu h3 {
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 20px 0;
    font-weight: 500;
    color: #555;
    line-height: 1.2em;
}
.action .menu h3 span {
    font-size: 14px;
    color: #cecece;
    font-weight: 400;
}
.action .menu ul li {
    list-style: none;
    padding: 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
}
.action .menu ul li box-icon {
    max-width: 20px;
    margin-right: 10px;
    opacity: 0.5;
}
.action .menu ul li:hover box-icon {
    opacity: 1;
}
.action .menu ul li a {
    display: inline-block;
    text-decoration: none;
    color: #555;
    font-weight: 500;
    transition: 0.5s;
}
.action .menu ul li .router-link {
    display: inline-block;
    text-decoration: none;
    color: #555;
    font-weight: 500;
    transition: 0.5s;
}
.action .menu ul li:hover a {
    color: rgb(8, 228, 8);
}
.action .menu ul li:hover .router-link {
    color: rgb(8, 228, 8);
}
</style>
