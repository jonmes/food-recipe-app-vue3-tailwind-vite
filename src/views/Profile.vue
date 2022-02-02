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
                <!-- Friends card -->
                <div class="bg-white p-3 hover:shadow">
                    <div
                        class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8"
                    >
                        <span class="text-green-500">
                            <svg
                                class="h-5 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </span>
                        <span>Similar Profiles</span>
                    </div>
                    <div class="grid grid-cols-3">
                        <div class="text-center my-2">
                            <img
                                class="h-16 w-16 rounded-full mx-auto"
                                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                alt=""
                            />
                            <a href="#" class="text-main-color">Kojstantin</a>
                        </div>
                        <div class="text-center my-2">
                            <img
                                class="h-16 w-16 rounded-full mx-auto"
                                src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
                                alt=""
                            />
                            <a href="#" class="text-main-color">James</a>
                        </div>
                        <div class="text-center my-2">
                            <img
                                class="h-16 w-16 rounded-full mx-auto"
                                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                alt=""
                            />
                            <a href="#" class="text-main-color">Natie</a>
                        </div>
                        <div class="text-center my-2">
                            <img
                                class="h-16 w-16 rounded-full mx-auto"
                                src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                                alt=""
                            />
                            <a href="#" class="text-main-color">Casey</a>
                        </div>
                    </div>
                </div>
                <!-- End of friends card -->
            </div>
            <!-- Right Side -->
            <div class="w-full md:w-9/12 mx-2 h-64">
                <!-- Profile tab -->
                <!-- About Section -->
                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div
                        class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
                    >
                        <span clas="text-green-500">
                            <svg
                                class="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </span>
                        <span class="tracking-wide">About</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Name</div>
                                <div class="px-4 py-2">Jane</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">
                                    Last Name
                                </div>
                                <div class="px-4 py-2">Doe</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">
                                    Gender
                                </div>
                                <div class="px-4 py-2">Female</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">
                                    Contact No.
                                </div>
                                <div class="px-4 py-2">+11 998001001</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">
                                    Current Address
                                </div>
                                <div class="px-4 py-2">
                                    Beech Creek, PA, Pennsylvania
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">
                                    Permanant Address
                                </div>
                                <div class="px-4 py-2">
                                    Arlington Heights, IL, Illinois
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">
                                    Email.
                                </div>
                                <div class="px-4 py-2">
                                    <a
                                        class="text-blue-800"
                                        href="mailto:jane@example.com"
                                        >jane@example.com</a
                                    >
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">
                                    Birthday
                                </div>
                                <div class="px-4 py-2">Feb 06, 1998</div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                    >
                        Show Full Information
                    </button>
                </div>
                <!-- End of about section -->

                <div class="my-4"></div>

                <!-- Experience and education -->
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
                                                Recipe name
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
                                            v-for="(post, index) in userPost.recipes"
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
                                                            class="flex-shrink-0 w-10 h-10"
                                                        >
                                                            <img
                                                                class="w-full h-full rounded-full"
                                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
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
                                                        Admin hello
                                                    </p>
                                                </td>
                                                <td
                                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                                >
                                                    <p
                                                        class="text-gray-900 whitespace-no-wrap"
                                                    >
                                                    {{post.posted_at}}
                                                        {{ convertTime(post.posted_at) }}
                                                    </p>
                                                </td>
                                                <td
                                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                                >
                                                    <box-icon
                                                        name="pencil"
                                                        type="solid"
                                                        animation="tada-hover"
                                                        color="green"
                                                    ></box-icon>
                                                </td>
                                                <td
                                                    class="py-5 border-b border-gray-200 bg-white text-sm"
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
                <!-- End of profile tab -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useQuery, useResult } from '@vue/apollo-composable'
import { user_account, user_post } from '../graphql/query'

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
} = useQuery(user_post.query, { id: userData.value.sub })

const convertTime = (apiTime) => {
  var chunked = apiTime.split(":");

  var date = new Date();
  date.setHours(chunked[0]);
  date.setMinutes(chunked[1]);

  return moment(date).format('MMMM DD, YYYY H:mm');
}

const closeMenu = () => {
    const toggleMenu = document.querySelector('.menu')
    toggleMenu.classList.remove('active')
    console.log(userData.value)
}
</script>

<style lang="scss" scoped></style>
