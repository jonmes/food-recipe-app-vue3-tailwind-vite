<template>
    <div class="container mx-auto my-5 p-5" @click="closeMenu">
        <div class="md:flex no-wrap md:-mx-2">
            <!-- Left Side -->
            <div class="w-full md:w-3/12 md:mx-2">
                <!-- Profile Card -->
                <div class="bg-white p-3 border-t-4 border-green-400">
                    <div class="image overflow-hidden">
                        <p v-if="error">Something went wrong...</p>
                        <p v-if="loading">Loading...</p>
                        <template v-else>
                            <div class="relative">
                                <box-icon
                                    class="absolute right-0"
                                    name="pencil"
                                    type="solid"
                                    animation="tada-hover"
                                    color="green"
                                ></box-icon>
                            </div>
                            <img
                                class="h-auto w-full mx-auto"
                                :src="userInfo.user_by_pk.avatar"
                                alt=""
                            />
                        </template>
                    </div>
                    <h1
                        class="text-gray-900 font-bold text-xl leading-8 my-1"
                    ></h1>
                    <p v-if="error">Something went wrong...</p>
                    <p v-if="loading">Loading...</p>
                    <p v-else class="flex justify-center pt-5">
                        <span class="inline-block">{{
                            userInfo.user_by_pk.name
                        }}</span>
                        &nbsp;
                        <box-icon
                            name="pencil"
                            type="solid"
                            animation="tada-hover"
                            color="green"
                        ></box-icon>
                    </p>
                    <h3
                        class="text-gray-600 font-lg text-semibold leading-6 pt-5"
                    >
                        Bio
                    </h3>
                    <p
                        class="text-sm text-gray-500 hover:text-gray-600 leading-6"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit, eligendi dolorum sequi illum qui unde
                        aspernatur non deserunt
                    </p>

                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
                    >
                        <li class="flex items-center py-3">
                            <span>Status</span>
                            <span class="ml-auto"
                                ><span
                                    class="bg-green-500 py-1 px-2 rounded text-white text-sm"
                                    >Active</span
                                ></span
                            >
                        </li>
                        <li class="flex items-center py-3">
                            <span>Member since</span>
                            <span class="ml-auto">Nov 07, 2016</span>
                        </li>
                    </ul>
                </div>
                <!-- End of profile card -->
                <div class="my-4"></div>
            </div>
            <!-- Right Side -->
            <div class="w-full md:w-9/12 mx-2 h-64">
                <div class="my-4"></div>
                <div class="container mx-auto px-4 sm:px-8">
                    <div class="py-8">
                        <div class="flex justify-between items-center">
                            <h2
                                class="text-2xl font-semibold leading-tight inline-block"
                            >
                                Posts
                            </h2>
                            <router-link
                                class="flex items-center justify-center bg-green px-4 py-2 space-x-3 text-white text-xl font-semibold leading-tight transition-colors duration-200 transform rounded-lg lg:w-auto bg-primary hover:bg-teal-300 focus:outline-none"
                                :to="{ name: 'Cook' }"
                            >
                                <!--  put them in side style
                                transform: ;
                                msfilter: ; -->
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    style="fill: rgb(255, 255, 255)"
                                >
                                    <path
                                        d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"
                                    ></path>
                                </svg>
                                <span>Create Recipe</span>
                            </router-link>
                        </div>
                        <div class="my-2 flex sm:flex-row flex-col">
                            <div class="block relative w-full">
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
                                    class="appearance-none rounded-r rounded-l sm:rounded-l border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div
                            class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"
                        >
                            <div
                                class="inline-block min-w-full shadow rounded-lg overflow-hidden"
                            >
                                <table class="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                            >
                                                Recipe
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                            >
                                                Rating
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                            >
                                                Created at
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                            >
                                                Edit
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                            >
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <p v-if="recipeError">
                                            Something went wrong...
                                        </p>
                                        <p v-if="recipeLoading">Loading...</p>
                                        <template
                                            v-else
                                            v-for="(
                                                post, index
                                            ) in userPost.recipes"
                                            :key="index"
                                        >
                                            <tr>
                                                <td
                                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                                >
                                                    <div
                                                        class="flex items-center"
                                                    >
                                                        <div
                                                            class="flex-shrink-0 w-20 h-20"
                                                        >
                                                            <img
                                                                class="w-full h-full rounded-md"
                                                                :src="
                                                                    post
                                                                        .image[0]
                                                                "
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div class="ml-3">
                                                            <p
                                                                class="text-gray-900 whitespace-no-wrap"
                                                            >
                                                                {{ post.name }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                                >
                                                    <p
                                                        class="text-gray-900 whitespace-no-wrap"
                                                    >
                                                        {{post.avg_rating}}
                                                    </p>
                                                </td>
                                                <td
                                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                                >
                                                    <p
                                                        class="text-gray-900 whitespace-no-wrap"
                                                    >
                                                        {{
                                                            convertTime(
                                                                post.posted_at
                                                            )
                                                        }}
                                                    </p>
                                                </td>
                                                <td
                                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                                >
                                                    <box-icon
                                                        name="pencil"
                                                        type="solid"
                                                        animation="fade-right-hover"
                                                        color="green"
                                                    ></box-icon>
                                                </td>
                                                <td
                                                    class="px-7 py-5 border-b border-gray-200 bg-white text-sm"
                                                >
                                                    <box-icon
                                                        type="solid"
                                                        name="trash-alt"
                                                        animation="tada-hover"
                                                        color="green"
                                                    ></box-icon>
                                                </td>
                                            </tr>
                                        </template>
                                    </tbody>
                                </table>
                                <div
                                    class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
                                >
                                    <span
                                        class="text-xs xs:text-sm text-gray-900"
                                    >
                                        Showing 1 to 4 of 50 Entries
                                    </span>
                                    <div class="inline-flex mt-2 xs:mt-0">
                                        <button
                                            class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                                        >
                                            Prev
                                        </button>
                                        <button
                                            class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref, watch, computed } from 'vue'
import { useQuery, useResult } from '@vue/apollo-composable'
import { useSubscription } from '@vue/apollo-composable'
import { user_account, user_post } from '../graphql/query'
import { user_post_sub } from '../graphql/subscription'

// ========= ALTERNATIVE WAY TO CHANGE QUERY VARIABLE ==========
// const variables = ref({ id: '' })
// const id = userData.value.sub
// const selectUser = (id) => {
//  variables.value = {
// id,
// }
// }
// selectUser(id)

const store = useStore()
const userData = computed(() => store.getters['main/user'])
// const userPost = ref([])

const {
    result: userInfo,
    loading,
    error,
} = useQuery(user_account.query, {
    id: userData.value.sub,
})

const {
    result: userPost,
    loading: recipeLoading,
    error: recipeError,
    subscribeToMore 
} = useQuery(user_post.query, { id: userData.value.sub })

    // const recipes = useResult(userPost, []);

    subscribeToMore(() => ({
      document: user_post_sub.subscription,
      variables: {
        id: userData.value.sub
      },
      updateQuery: (previousResult, { subscriptionData }) => {
          previousResult.recipes.push(subscriptionData.data.recipes)
          return previousResult
      }
    }));

// ======================== Not SUBSCRIPTION ==========================
// const {
//     result,
    // loading: recipeLoading,
    // error: recipeError,
// } = useSubscription(user_post.subscription, () => ({ id: userData.value.sub }))
// watch(
//     result,
//     (data) => {
//         userPost.value.push(data)
//         console.log(data.recipes)
//     }
// )
// =================================================================


const convertTime = (apiTime) => {
    const date = new Date(apiTime)

    return date.toDateString()
}

const closeMenu = () => {
    const toggleMenu = document.querySelector('.menu')
    toggleMenu.classList.remove('active')
    // console.log(userPost.value)
}
</script>

<style lang="scss" scoped></style>
