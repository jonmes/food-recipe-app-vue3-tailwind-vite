<template>
    <section
        class="flex flex-wrap gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
        <h1 class="w-full mt-10 font-great font-black text-4xl text-center">
            Search Your Favorite Recipe
        </h1>
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
        class="flex flex-wrap gap-y-24 justify-evenly py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
        @click="closeMenu"
    >
        <p v-if="recipeError">Something went wrong...</p>
        <p v-if="recipeLoading">Loading... Login First...</p>
        <template v-else>
            <div
                class="max-w-xs mb-5 rounded-md  overflow-hidden hover:scale-105 transition duration-500 cursor-pointer"
                v-for="rec in userPost.recipes"
                :key="rec.id"
            >
                <router-link
                    role="button"
                    :to="{
                        name: 'Details',
                        params: { id: rec.id },
                        query: { id: rec.id },
                    }"
                    class="font-semibold text-gray-800"
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
                        </span>
                    </div>
                </router-link>
            </div>
        </template>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useQuery, useSubscription } from '@vue/apollo-composable'
import { get_recipes } from '../graphql/query'
import { browse_recipes } from '../graphql/subscription'
import vue3starRatings from 'vue3-star-ratings'

const recipeList = ref([])

const {
    result: userPost,
    loading: recipeLoading,
    error: recipeError,
} = useQuery(get_recipes.query)



const {
    loading: recipeLoadingSub,
    result: recipeResultSub,
    error: recipeErrorSub,
    onResult: recipeOnResultSub
} = useSubscription(browse_recipes.subscription)

recipeOnResultSub((result) => {
    console.log('from subscription', result.data.recipes)
    recipeList.value = []
    recipeList.value.push(...result.data.recipes)
})

</script>

<style lang="scss" scoped></style>
