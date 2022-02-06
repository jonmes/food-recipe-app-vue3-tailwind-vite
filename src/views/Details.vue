<template>
    <div
        class="flex flex-wrap justify-between px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-12 z-0"
    >
        <h1 class="w-full font-black font-great text-6xl mb-5">
            {{ recipeDetail.recipes_by_pk.name }}
        </h1>

        <div class="py-6">
            <!-- Breadcrumbs -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center space-x-2 text-gray-400 text-sm">
                    <a href="#" class="hover:underline hover:text-gray-600"
                        >Home</a
                    >
                    <span>
                        <svg
                            class="h-5 w-5 leading-none text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </span>
                    <a href="#" class="hover:underline hover:text-gray-600"
                        >Electronics</a
                    >
                    <span>
                        <svg
                            class="h-5 w-5 leading-none text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </span>
                    <span>Headphones</span>
                </div>
            </div>
            <!-- ./ Breadcrumbs -->
            <div class="w-6/12 inline-block content-center">
                <vue3starRatings
                    class="stars"
                    id="stars"
                    v-model="recipeDetail.recipes_by_pk.avg_rating"
                    starSize="25"
                    starColor="#71B214"
                    inactiveColor="#e6ebdf"
                    controlBg="transparent"
                    showControl="false"
                    disableClick="true"
                    controlSize="0"
                />
                <div class="ml-5 inline-block">
                    {{ recipeDetail.recipes_by_pk.avg_rating.toFixed(1) }}
                    Ratings
                </div>
                <button
                    class="ml-10 bg-green sm:w-auto h-8 px-8 font-large text-white rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
                >
                    Rate
                </button>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div class="flex flex-col md:flex-row -mx-4">
                    <div class="md:flex-1 px-4">
                        <div v-if="true">
                            <div
                                class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4"
                                v-if="image"
                            >
                                <div class="w-full h-80 flex justify-center">
                                    <img class="h-80" :src="image" />
                                </div>
                            </div>
                            <div
                                v-else
                                class="max-w-xs mb-5 rounded-md overflow-hidden hover:scale-105 transition duration-500 cursor-pointer"
                            >
                                <div class="w-full h-80">
                                    <div>
                                        <img
                                            :src="
                                                recipeDetail.recipes_by_pk
                                                    .image[0]
                                            "
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="flex -mx-2 mb-4">
                                <template
                                    v-for="(i, index) in recipeDetail
                                        .recipes_by_pk.image"
                                    :key="index"
                                >
                                    <div class="flex-1 px-2">
                                        <button
                                            @click="image = i"
                                            :class="{
                                                'ring-2 ring-indigo-300 ring-inset':
                                                    image === index,
                                            }"
                                            class="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center"
                                        >
                                            <div class="flex justify-center">
                                                <img class="w-20" :src="i" />
                                            </div>
                                        </button>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="md:flex-1 px-4">
                        <h2
                            class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"
                        >
                            Lorem ipsum dolor, sit amet consectetur, adipisicing
                            elit.
                        </h2>
                        <p class="text-gray-500 text-sm">
                            By
                            <a href="#" class="text-indigo-600 hover:underline"
                                >{{recipeDetail.recipes_by_pk.user.name}}</a
                            >
                        </p>

                        <div class="flex items-center space-x-4 my-4">
                            <div>
                                <div
                                    class="rounded-lg bg-gray-100 flex py-2 px-3"
                                >
                                    <span class="text-indigo-400 mr-1 mt-1"
                                        >$</span
                                    >
                                    <span
                                        class="font-bold text-indigo-600 text-3xl"
                                        >25</span
                                    >
                                </div>
                            </div>
                            <div class="flex-1">
                                <p class="text-green-500 text-xl font-semibold">
                                    Save 12%
                                </p>
                                <p class="text-gray-400 text-sm">
                                    Inclusive of all Taxes.
                                </p>
                            </div>
                        </div>

                        <p class="text-gray-500">
                            Lorem ipsum, dolor sit, amet consectetur adipisicing
                            elit. Vitae exercitationem porro saepe ea harum
                            corrupti vero id laudantium enim, libero blanditiis
                            expedita cupiditate a est.
                        </p>

                        <div class="flex py-4 space-x-4">
                            <div class="relative">
                                <div
                                    class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold"
                                >
                                    Qty
                                </div>
                                <select
                                    class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>

                                <svg
                                    class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                    />
                                </svg>
                            </div>

                            <button
                                type="button"
                                class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { get_recipe_by_id } from '../graphql/query'
import vue3starRatings from 'vue3-star-ratings'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id // read parameter id (it is reactive)
const image = ref('')

const {
    result: recipeDetail,
    loading: recipeLoading,
    error: recipeError,
} = useQuery(get_recipe_by_id.query, { id })
</script>

<style scoped>
.vue3-star-ratings__wrapper[data-v-3d93c878] {
    padding: 0;
}
#stars.vue3-star-ratings__wrapper.stars {
    padding: 0;
    margin-left: 40px;
    margin-top: 20px;
}
</style>
