<template>
    <div
        class="flex flex-wrap justify-between px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-12 z-0"
    >
        <h1 class="w-full font-black font-great text-6xl mb-5">
            {{ recipeDetail.recipes_by_pk.name }}
        </h1>

        <div class="py-6 w-full">
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
                    <div class="mr-10 inline-block">
                        {{ recipeDetail.recipes_by_pk.rating_count.toFixed(0) }}
                        Ratings
                    </div>
                    <Popper arrow class="inline-block">
                        <button
                            class="bg-green sm:w-auto h-8 px-8 font-large text-white rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
                        >
                            Rate
                        </button>
                        <template #content="{ close }">
                            <div class="flex justify-center w-full">
                                <vue3starRatings
                                    v-model="ratingVal"
                                    starSize="25"
                                    starColor="#71B214"
                                    inactiveColor="#e6ebdf"
                                    controlBg="grey"
                                    disable-click="true"
                                    class="w-full"
                                />
                            </div>
                            <div class="flex justify-center">
                                {{ ratingVal }} Stars
                            </div>
                            <button
                                class="bg-green mr-5 sm:w-auto h-8 px-10 font-large text-white rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
                                @click="rateRecipe()"
                            >
                                Rate
                            </button>
                            <Button
                                class="bg-green sm:w-auto h-8 px-10 font-large text-white rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
                                @click="close"
                                >Close</Button
                            >
                        </template>
                    </Popper>
                </div>
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
                                class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4"
                                v-else
                            >
                                <div class="w-full h-80 flex justify-center">
                                    <img
                                        class="h-80"
                                        :src="
                                            recipeDetail.recipes_by_pk.image[0]
                                        "
                                    />
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
                            {{ recipeDetail.recipes_by_pk.description }}
                        </h2>
                        <p class="text-gray-500 text-sm mt-5">
                            By
                            <a
                                href="#"
                                class="text-indigo-600 hover:underline"
                                >{{ recipeDetail.recipes_by_pk.user.name }}</a
                            >
                        </p>
                        <h4 class="text-gray-500 mt-5">
                            Category: {{ recipeDetail.recipes_by_pk.category }}
                        </h4>
                        <h4 class="text-gray-500 mt-5">
                            Preparation Time:
                            {{ recipeDetail.recipes_by_pk.prep_time }} Min
                        </h4>
                        <h4 class="text-gray-500 mt-5">
                            Calories:
                            {{ recipeDetail.recipes_by_pk.calories }} KCal
                        </h4>
                        <h4 class="text-gray-500 mt-5">
                            Servings: {{ recipeDetail.recipes_by_pk.servings }}
                        </h4>
                        <h4 class="text-gray-500 mt-5">
                            Posted at:
                            {{
                                convertTime(
                                    recipeDetail.recipes_by_pk.posted_at
                                )
                            }}
                        </h4>

                        <div class="flex py-4 space-x-4">
                            <button
                                type="button"
                                class="h-14 px-6 py-2 font-semibold rounded-xl bg-green hover:bg-gradient-to-r from-green-500 to-pink-500 text-white items-center"
                            >
                                <i class="bx bxs-heart bx-md"></i>
                                <span> add to favorite</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="task-comments" class="pt-4"></div>

        <section class="w-full rounded-b-lg mt-4">
            <!--  ============== Ingrediants ======================== -->

            <div class="w-full mb-10">
                <h1 class="text-4xl font-black font-great mb-5">Ingrediants</h1>
                <h2
                    class="text-2xl ml-10 pb-3"
                    v-for="ing in recipeDetail.recipes_by_pk.ingrediant"
                    :key="ing"
                >
                    {{ ing }}
                </h2>
            </div>
            <!-- ================== Steps ============== -->
            <div class="w-full mb-10">
                <h1 class="text-4xl font-black font-great mb-5">Steps</h1>
                <h2
                    class="text-2xl text-justify ml-10 pb-5"
                    v-for="(step, index) in recipeDetail.recipes_by_pk.steps"
                    :key="index"
                >
                    <span class="font-black font-great"
                        >Step {{ index + 1 }}: </span
                    ><br />
                    {{ step }}
                </h2>
            </div>
            <!--     comment-->
            <div
                v-if="reg_show_alert"
                class="text-white bg-green-400 text-2xl text-center font-bold p-5 mb-4"
                :class="reg_alert_variant"
            >
                {{ reg_alert_msg }}
            </div>
            <vee-form :validation-schema="schema" @submit="register">
                <input type="hidden" />
                <vee-field
                    type="text"
                    name="comment"
                    class="w-full shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-2xl"
                    v-model="newComment"
                    placeholder="Comment..."
                    id="comment_content"
                ></vee-field>
                <ErrorMessage class="text-red-600 ml-5" name="comment" />
                <button
                    class="font-bold mb-10 py-2 px-4 w-full bg-green text-lg text-white shadow-md rounded-lg"
                    type="submit"
                >
                    Comment
                </button>
            </vee-form>
            <div
                class="bg-white rounded-lg p-3 flex flex-col justify-center items-center md:items-start shadow-lg mb-4"
                v-for="comment in commentSub"
                :key="comment"
            >
                <div class="flex flex-row justify-center mr-2">
                    <img
                        alt="avatar"
                        width="48"
                        height="48"
                        class="rounded-full w-10 h-10 mr-4 shadow-lg mb-4"
                        src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png"
                    />
                    <h3
                        class="text-green-600 font-semibold text-lg text-center md:text-left"
                    >
                        {{ comment.user.name }}
                    </h3>
                </div>

                <p
                    style="width: 90%"
                    class="text-gray-600 text-lg text-center md:text-left"
                >
                    {{ comment.comment }}
                </p>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useQuery, useSubscription } from '@vue/apollo-composable'
import { get_recipe_by_id } from '../graphql/query'
import vue3starRatings from 'vue3-star-ratings'
import { useRouter, useRoute } from 'vue-router'
import { useMutation } from '@vue/apollo-composable'
import { create_comment, rate_recipe } from '../graphql/mutation'
import { user_comment_sub } from '../graphql/subscription'
import Popper from 'vue3-popper'

const store = useStore()
const userData = computed(() => store.getters['main/user'])
const route = useRoute()
const router = useRouter()
const id = route.params.id // read parameter id (it is reactive)
const image = ref('')
const newComment = ref('')
const ratingVal = ref(0)
const commentSub = ref([])
const variables = ref({
    id,
})

const reg_in_submission = ref(false)
const reg_show_alert = ref(false)
const reg_alert_variant = ref('bg-green-400')
const reg_alert_msg = ref('')
const schema = {
    comment: 'required',
}

const register = (values) => {
    console.log(values)
    reg_show_alert.value = true
    reg_in_submission.value = true
    reg_alert_variant.value = ref('bg-green-500')
    reg_alert_msg.value = ref('Please wait! Your Comment!')

    reg_alert_variant.value = ref('bg-green-500')
    reg_alert_msg.value = ref('Success! Your recipe has been created.')
    createComment()
    setTimeout(() => {
    reg_show_alert.value = false
    }, 1000)

}

const {
    result: recipeDetail,
    loading: recipeLoading,
    error: recipeError,
} = useQuery(get_recipe_by_id.query, { id })

const {
    loading: commentLoadingSub,
    result: commentDetailSub,
    error: commentErrorSub,
    onResult: commentonResultSub,
} = useSubscription(user_comment_sub.subscription, variables)

commentonResultSub((result) => {
    console.log('from subscription', result.data.comments[0])
    commentSub.value = []
    commentSub.value.push(...result.data.comments)
})

const {
    mutate: createComment,
    loading,
    error,
    onDone,
} = useMutation(create_comment.mutation, () => ({
    variables: {
        comment: newComment.value,
        recipe_id: id,
        user_id: userData.value.sub,
    },
}))

const {
    mutate: rateRecipe,
    loading: ratingLoading,
    error: ratingError,
    onDone: ratingOnDone,
} = useMutation(rate_recipe.mutation, () => ({
    variables: {
        rating_val: ratingVal.value,
        recipe_id: id,
        user_id: userData.value.sub,
    },
}))

onDone(() => {
    router.push({ name: 'Details' })
})
ratingOnDone(() => {
    router.push({ name: 'Details' })
})

const convertTime = (apiTime) => {
    const date = new Date(apiTime)

    return date.toDateString()
}
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

:deep(.popper) {
    background: #797979;
    padding: 20px;
    border-radius: 20px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
}

:deep(.popper #arrow::before) {
    background: #797979;
}

:deep(.popper:hover),
:deep(.popper:hover > #arrow::before) {
    background: #627e5f;
}
</style>
