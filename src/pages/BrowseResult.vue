<template>
    <section
        class="flex flex-wrap gap-y-24 justify-evenly py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"

    >
        <p v-if="recipeError">Something went wrong...</p>
        <p v-if="recipeLoading">Loading... Login First...</p>
        <template v-else>
            <div
                class="max-w-xs mb-5 rounded-md overflow-hidden hover:scale-105 transition duration-500 cursor-pointer"
                v-show="searchStatus == true"
                v-for="rec in searchRecipe.search_recipe_name_ingrediant"
                :key="rec.id"
            >
            Search Mode On
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
import { useQuery } from '@vue/apollo-composable'
import { search_recipe } from '../graphql/query'
import vue3starRatings from 'vue3-star-ratings'


const props = defineProps({search: String})
const variables = ref({
  search: props.search
})

const checkup = () => {
    console.log(props.search, "search from props")
}
checkup()
const {
    result: searchRecipe,
    loading: searchLoading,
    error: searchError,
} = useQuery(search_recipe.query, variables)


</script>

<style lang="scss" scoped></style>
