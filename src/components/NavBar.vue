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
                        <router-link :to="{ name: 'home' }">Home</router-link>
                        <div
                            class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
                        />
                    </li>
                    <li
                        class="text-lg md:text-base lg:text-lg font-medium group"
                        :class="{ 'text-green': activeMenu === 'about' }"
                    >
                        <router-link :to="{ name: 'About' }">
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
                        <button v-if="authenticated" @click="logout">
                            &nbsp;&nbsp;&nbsp;{{
                                userData.nickname
                            }}
                            &nbsp;&nbsp;&nbsp;Logout
                        </button>

                        <!-- <div v-if="!authLoading">
          </div> -->
                        <!-- <p v-if="authenticated">Redirecting to Home...</p> -->
                        <!-- <div v-else @click="logout">Logout</div> -->
                        <div
                            class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
                        />
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
const menus = ['Home', 'Delivery', 'Cook', 'FAQs', 'Contact']
const sidebarOpen = ref(false)
const activeMenu = 'Home'
const store = useStore()
const router = useRouter()

const authLoading = computed(() => store.getters['main/isLoading'])
const authenticated = computed(() => store.getters['main/authenticated'])
const userData = computed(() => store.getters['main/user'])

const login = async () =>  {
    await signIn()
    if (authenticated.value) {
        router.push({ name: 'Cook' })
    }
}
const logout = async () => {
    await signOut()
}
</script>

<style scoped></style>
