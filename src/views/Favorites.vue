<template>
    <section
        class="flex flex-wrap gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
        <h1 class="w-full mt-10 font-great font-black text-4xl text-center">
            Your Favorite Recipes
        </h1>
    </section>
    <section
        class="flex flex-wrap gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
        <p v-if="recipeError">Something went wrong...</p>
        <p v-if="recipeLoading">Loading... Login First...</p>
        <template v-else>
            <div v-show="favResult.favorites.length == 2">
                <h1
                    class="w-full mt-10 font-great font-black text-4xl text-center"
                >
                    You Have No Favorite Recipe Yet
                </h1>
            </div>
            <div
                class="max-w-xs mb-5 rounded-md overflow-hidden hover:scale-105 transition duration-500 cursor-pointer"
                v-show="favResult.favorites.length > 0"
                v-for="rec in favResult.favorites"
                :key="rec.id"
            >
                <router-link
                    role="button"
                    :to="{
                        name: 'Details',
                        params: { id: rec.recipe.id },
                        query: { id: rec.recipe.id },
                    }"
                    class="font-semibold text-gray-800"
                >
                    <div>
                        <img
                            class="w-80 h-80"
                            :src="rec.recipe.image[0]"
                            alt="pic"
                        />
                    </div>
                    <div class="py-4 px-4 bg-white">
                        <h3
                            class="text-2xl font-great font-black text-gray-600"
                        >
                            {{ rec.recipe.name }}<br />by &quot;{{
                                rec.recipe.user.name
                            }}
                        </h3>
                        <p class="mt-4 h-20 text-lg font-thin">
                            {{ rec.recipe.description }}
                        </p>
                        <vue3starRatings
                            class="stars"
                            id="stars"
                            v-model="rec.recipe.avg_rating"
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
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useQuery } from '@vue/apollo-composable'
import { get_favorite } from '../graphql/query'
import vue3starRatings from 'vue3-star-ratings'

const store = useStore()
const userData = computed(() => store.getters['main/user'])

const {
    result: favResult,
    loading: favLoading,
    error: favError,
} = useQuery(get_favorite.query, {
    user_id: userData.value.sub,
})
</script>

<style lang="scss" scoped></style>
