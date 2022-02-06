<template>
    <div
        class="w-full min-h-screen font-sans text-gray-900 bg-gradient-to-br from-transparent to-green-100"
        :class="sidebarOpen ? 'overflow-hidden h-screen' : ''"
    >
        <!-- <div
      class="fixed px-3 py-2 text-sm font-bold text-white bg-gray-900 rounded bottom-4 left-4 z-50"
    >
      <span class="sm:hidden">DEFAULT</span>
      <span class="hidden sm:inline-block md:hidden">SM</span>
      <span class="hidden md:inline-block lg:hidden">MD</span>
      <span class="hidden lg:inline-block xl:hidden">LG</span>
      <span class="hidden xl:inline-block">XL</span>
    </div> -->

        <section
            class="flex flex-wrap-reverse gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
        >
            <div class="relative z-10 md:w-1/2 w-full">
                <img
                    class="absolute top-0 right-0 md:-top-4 md:-right-8 w-24 h-auto slideUp"
                    src="/img/leaf.png"
                    alt=""
                />
                <span class="flex items-center px-1 text-xl text-green slideUp">
                    <span class="font-medium">100% Organic food</span>
                    <img class="w-auto h-8" src="/img/vegetable.png" alt="" />
                </span>
                <h1
                    class="pt-4 text-4xl font-great sm:text-5xl lg:text-6xl text-green font-bold tracking-tighter leading-tight whitespace-nowrap slideUp"
                >
                    Healthy Lifestyle <br />
                    is your only <br />
                    <span class="whitespace-nowrap text-green">
                        unfair advantage
                    </span>
                </h1>
                <!-- <h2 class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 font-bold text-3xl md:text-4 lg:text-6xl text-center lg:text-center mb-2 py-2 slideUp">
				Learn. Cook. Share.<br>Cooking Made Easy.
			</h2> -->
                <p
                    class="pt-8 sm:text-lg max-w-md font-normal text-gray-600 leading-relaxed z-0 slideUp"
                >
                    Cook healthy foods with r<span class="text-green">E</span
                    >cipe daily meal posted by world wide expert nutritionist,
                    chef and even Your mom🤶.
                </p>
                <div class="flex z-10 pt-8 space-x-4 sm:space-x-6">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <router-link
                            :to="{ name: 'Cook' }"
                            class="flex z-10 justify-center items-center w-full sm:w-auto h-13 px-8 bg-green font-medium text-white rounded-xl whitespace-nowrap hover:shadow-primary transition-shadow duration-300"
                        >
                            🔍Explore recipes
                        </router-link>
                        <router-link
                            :to="{ name: 'Cook' }"
                            class="flex justify-center items-center w-full sm:w-auto h-13 px-8 font-medium text-gray-900 border border-gray-900 rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
                        >
                            let's cook 👩‍🍳
                        </router-link>
                    </div>
                </div>
                <div class="flex pt-20">
                    <img class="w-24" src="/img/chef.png" alt="" />
                    <div class="pt-5 pl-3">
                        <div class="text-xl font-bold leading-relaxed">
                            Chef of the month
                        </div>
                        <div class="inline-flex text-gray-600 leading-relaxed">
                            People loved his 🍳
                        </div>
                        <div class="font-bold text-green leading-relaxed">
                            80+ famous dishes
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        class="flex md:hidden pt-8 justify-end space-x-1 font-bold"
                    >
                        <span>Powered by</span>
                        <Minab class="w-8 h-8 text-green-900 fill-current" />
                        <span>Minab</span>
                    </div>
                </div>
            </div>

            <div class="relative md:w-1/2 w-full flex flex-col justify-between">
                <img
                    class="w-96 lg:w-full drop-shadow-2xl self-center lg:self-end fadeInRotate"
                    src="/img/dish.png"
                    alt=""
                />
                <div
                    class="absolute right-0 lg:-right-6 top-0 lg:top-28 flex flex-col py-5 px-7 rounded-2xl shadow-xl bg-white/80 backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                    <div class="flex -space-x-3">
                        <div
                            v-for="i in 3"
                            class="w-13 h-13 rounded-full border-4 border-white object-cover overflow-hidden"
                            :key="i"
                        >
                            <img :src="`/img/avatar-${i}.jpeg`" alt="" />
                        </div>
                    </div>
                    <div class="pt-3 font-bold">Happy users</div>
                    <div
                        class="flex items-center text-gray-600 leading-relaxed"
                    >
                        <StarIcon class="w-5 h-5" />
                        <span class="pl-1">4.9 (+2.5k Ratings)</span>
                    </div>
                </div>
                <div
                    class="absolute left-0 bottom-0 md:bottom-32 lg:bottom-16 flex bg-white/80 rounded-2xl shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                    <img
                        class="w-auto h-20 self-end"
                        src="/img/hero-dish.png"
                        alt=""
                    />
                    <div class="pr-7 pl-2 py-5">
                        <div class="font-bold">Best Nutritions</div>
                        <div class="text-gray-600 leading-relaxed">
                            Boost Your Nutrition 🚀
                        </div>
                    </div>
                </div>
                <div
                    class="hidden md:flex justify-end align-center space-x-1 font-bold"
                >
                    <span>Powered by</span>
                    <Minab class="w-8 h-8 text-green-900 fill-current" />
                    <span>Minab</span>
                </div>
            </div>
        </section>
        <section
            class="flex flex-wrap gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
        >
            Browse By
            <MarqueeText
                :duration="10"
                :repeat="4"
                :paused="isPaused"
                class="py-20"
            >
                <span class="badge badge-success ml-2">
                    <img
                        class="h-40 w-40 rounded-full mx-4 inline-block saturate-0 hover:saturate-100 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                        src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                        alt=""
                /></span>

                <span class="badge badge-danger ml-2">
                    <img
                        class="h-40 w-40 rounded-full mx-4 inline-block saturate-0 hover:saturate-100 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                        src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                        alt=""
                /></span>

                <span class="badge badge-success ml-2">
                    <img
                        class="h-40 w-40 rounded-full mx-4 inline-block saturate-0 hover:saturate-100 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                        src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                /></span>

                <span class="badge badge-danger ml-2">
                    <img
                        class="h-40 w-40 rounded-full mx-4 inline-block saturate-0 hover:saturate-100 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                        src="https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                /></span>

                <span
                    class="badge badge-success ml-2 text-2xl text-bold text-black hover:text-green"
                >
                    <h1 class="absolute top-40 right-10 px-4">Lazagna</h1>
                    <img
                        class="h-40 w-40 hover:text-green rounded-full mx-4 inline-block saturate-0 hover:saturate-100 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                /></span>

                <span class="badge badge-info ml-2">
                    <img
                        class="h-40 w-40 rounded-full mx-4 inline-block saturate-0 hover:saturate-100 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                        src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                /></span>

                <span class="badge badge-success ml-2">
                    <img
                        class="h-40 w-40 rounded-full mx-4 inline-block saturate-0 hover:saturate-100 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                        src="https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                /></span>
            </MarqueeText>
        </section>
        <section
            class="flex flex-wrap gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
        >
            <div class="w-full mb-5 my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="relative">
                        <select
                            class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                            <option>All</option>
                            <option>Under 15</option>
                            <option>15 - 30 min</option>
                            <option>30 - 45 min</option>
                            <option>Over 1 hour</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                        >
                            <svg
                                class="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="w-full block relative">
                    <span
                        class="h-full absolute inset-y-0 left-0 flex items-center pl-2"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            class="h-4 w-4 fill-current text-gray-500"
                        >
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                            ></path>
                        </svg>
                    </span>
                    <input
                        placeholder="Search"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                    />
                </div>
            </div>
        </section>
        <section
            class="flex flex-wrap gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
            @click="closeMenu"
        >
            <p v-if="recipeError">Something went wrong...</p>
            <p v-if="recipeLoading">Loading...</p>
            <template v-else>
                <div
                    class="max-w-xs mb-5 rounded-md overflow-hidden hover:scale-105 transition duration-500 cursor-pointer"
                    v-for="rec in userPost.recipes"
                    :key="rec.id"
                >
                    <div>
                        <img class="w-80 h-80" :src="rec.image[0]" alt="pic" />
                    </div>
                    <div class="py-4 px-4 bg-white">
                        <h3
                            class="text-2xl font-great font-black text-gray-600"
                        >
                            {{ rec.name }}<br />by &quot;{{ rec.user.name }}
                        </h3>
                        <p class="mt-4 text-lg font-thin">
                            {{ rec.description }}
                        </p>
                        <vue3starRatings
                            class="stars"
                            id="stars"
                            v-model="rec.avg_rating"
                            starSize="25"
                            starColor="#10B981"
                            inactiveColor="#e6ebdf"
                            controlBg="transparent"
                            showControl="false"
                            disableClick="true"
                            controlSize="0"
                        />
                        <router-link
                                role="button"
                                :to="{
                                    name: 'Details',
                                    params: { id: rec.id },
                                    query: { id: rec.id },
                                }"
                                class="font-semibold text-gray-800"
                                >
                        <span
                            class="flex items-center justify-center mt-4 w-full bg-green hover:bg-green-500 py-1 rounded"
                            ><svg
                                width="20px"
                                height="20px"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 4.4C3.439 4.4 0 9.232 0 10c0 .766 3.439 5.6 10 5.6 6.56 0 10-4.834 10-5.6 0-.768-3.44-5.6-10-5.6zm0 9.907c-2.455 0-4.445-1.928-4.445-4.307S7.545 5.691 10 5.691s4.444 1.93 4.444 4.309-1.989 4.307-4.444 4.307zM10 10c-.407-.447.663-2.154 0-2.154-1.228 0-2.223.965-2.223 2.154s.995 2.154 2.223 2.154c1.227 0 2.223-.965 2.223-2.154 0-.547-1.877.379-2.223 0z"
                                /></svg
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Recipe
                            
                        </span></router-link>
                    </div>
                </div>
            </template>
        </section>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { get_recipes } from '../graphql/query'
import HamburgerIcon from '../assets/icons/hamburger.svg'
import StarIcon from '../assets/icons/star.svg'
import Minab from '../assets/icons/minab.svg'
import MarqueeText from 'vue-marquee-text-component'
import vue3starRatings from 'vue3-star-ratings'

const activeMenu = 'Home'
const menus = ['Home', 'Delivery', 'Pricing', 'FAQs', 'Contact']
const sidebarOpen = ref(false)

const {
    result: userPost,
    loading: recipeLoading,
    error: recipeError,
} = useQuery(get_recipes.query)

const closeMenu = () => {
    console.log(userPost.value)
}
</script>

<style scoped></style>
