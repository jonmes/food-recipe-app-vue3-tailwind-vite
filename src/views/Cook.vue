<template>
    <div
        class="flex flex-wrap-reverse justify-between px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-12 z-0"
    >
        <form
            class="relative md:m-10 md:2-1/2 w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
            <h1 class="mb-10 text-4xl">
                Create
                <span
                    class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-100 relative inline-block"
                >
                    <span class="relative text-green">
                        Your Own &nbsp;</span
                    > </span
                >&nbsp;Recipe
            </h1>
            <!-- =========================== title =============================================== -->
            <hr mt-10 mb-10 />
            <div class="flex w-full items-center mt-5 mb-5">
                <label class="w-2/12">Name</label>
                <input
                    type="text"
                    v-model="name"
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="name"
                />
            </div>
            <!-- ========================= IMAGE UPLOAD ===========================  -->
            <hr mt-10 mb-10 />
            <div class="flex w-full items-center mt-5 mb-5">
                <label class="w-2/12">Upload Image</label>
                <button
                    @click="openUploadModal"
                    type="button"
                    class="bg-green hover:bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full"
                >
                    Upload Images
                </button>
            </div>
            <!-- <p class="block">{{imageArray}}</p> -->
            <div
                class="p-1 inline-block flex flex-wrap justify-start px-0 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-12 z-0"
            >
                <article
                    v-for="(imageP, index) in imageArray"
                    :key="index"
                    tabindex="0"
                    class="group flex inline-block inline-block hasImage w-10 h-10 md:w-20 md:h-20 lg:w-40 lg:h-40 xl:w-40 xl:h-60 mb-5 ml-1 xl:ml-5 rounded-md focus:outline-none focus:shadow-outline bg-green-100 cursor-pointer relative text-transparent hover:text-white shadow-sm"
                >
                    <img
                        :src="imageP"
                        alt="upload preview"
                        class="img-preview absolute inline-block inset-0 w-10 h-10 md:w-20 md:h-20 lg:w-40 lg:h-40 xl:w-40 xl:h-60 object-cover rounded-md bg-fixed"
                    />

                    <section
                        class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3"
                    >
                        <h1 class="flex-1"></h1>
                        <div class="flex">
                            <span class="p-1">
                                <i>
                                    <svg
                                        class="fill-current w-4 h-4 ml-auto pt-"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"
                                        />
                                    </svg>
                                </i>
                            </span>

                            <p class="p-1 size text-xs"></p>
                            <button
                                class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md"
                                @click="imgDelete(index)"
                            >
                                <svg
                                    class="pointer-events-none fill-current w-4 h-4 ml-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        class="pointer-events-none"
                                        d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </section>
                </article>
            </div>

            <!-- =========================== CATEGORY ======================= -->
            <hr mt-10 mb-10 />
            <div class="flex w-full items-center mt-5 mb-5">
                <label class="w-2/12">Category</label>
                <input
                    type="text"
                    v-model="category"
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder=""
                />
                <input type="text" v-model="userData" class="hidden" />

                <!-- Dropdown menu -->
            </div>
            <!-- ================================== PREPARATION TIME ====================================  -->
            <hr mt-10 mb-10 />
            <div class="flex w-full items-center mt-5 mb-5">
                <label class="w-2/12">Preparation Time</label>
                <input
                    type="number"
                    v-model="prep_time"
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="10 - 20 min"
                />
            </div>
            <!-- ============================= CALORIES   ===================================== -->
            <hr mt-10 mb-10 />
            <div class="flex w-full items-center mt-5 mb-5">
                <label class="w-2/12">Calories</label>
                <input
                    type="number"
                    v-model="calories"
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="1000"
                />
            </div>
            <!-- ============================= SERVING   ===================================== -->
            <hr mt-10 mb-10 />
            <div class="flex w-full items-center mt-5 mb-5">
                <label class="w-2/12">Serving</label>
                <input
                    type="number"
                    v-model="servings"
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="3"
                />
            </div>
            <!-- ================================= INGREDIANTS ==================================== -->

            <hr mt-10 mb-10 />
            <div class="mt-5 mb-5">
                <div
                    class="mb-5"
                    v-for="(food, index) in ingrediant"
                    :key="index"
                >
                    <div class="flex w-full">
                        <label class="w-2/12">Ingredient</label>
                        <input
                            v-model="food.ing"
                            :name="`ingrediant[${index}][ing]`"
                            type="text"
                            class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingredient Name"
                        />

                        <!-- <label class="pl-12 w-2/12">Amount</label>
            <input
              v-model="food.amount"
              :name="`ingrediant[${index}][title]`"
              type="number"
              class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            /> -->

                        <button
                            class="uppercase ml-4 p-3 flex items-center border border-red-300 hover:border-red-600 text-red-500 hover:text-white hover:bg-red-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12"
                            @click="removeIngrediant(index)"
                            type="button"
                        >
                            <svg
                                width="32"
                                height="32"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 32 32"
                                style="transform: rotate(360deg)"
                            >
                                <path
                                    d="M12 12h2v12h-2z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    d="M18 12h2v12h-2z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    d="M12 2h8v2h-8z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="mt-10 pb-10">
                <button
                    @click="addIngrediant"
                    type="button"
                    class="bg-green hover:bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full"
                >
                    + Add Ingrediant
                </button>
            </div>

            <!-- ========================== STEPS ============================================ -->
            <hr mt-10 mb-10 />
            <div class="mt-5 mb-5">
                <div
                    class="mb-5"
                    v-for="(foodStep, index) in steps"
                    :key="index"
                >
                    <div class="flex w-full">
                        <label class="w-2/12">Step {{ index + 1 }}</label>
                        <textarea
                            v-model="foodStep.step"
                            :name="`steps[${index}][step]`"
                            type="text"
                            rows="5"
                            cols="60"
                            class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Steps..."
                        ></textarea>

                        <button
                            class="uppercase ml-4 p-3 flex items-center border border-red-300 hover:border-red-600 text-red-500 hover:text-white hover:bg-red-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12"
                            @click="removeStep(index)"
                            type="button"
                        >
                            <svg
                                width="32"
                                height="32"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 32 32"
                                style="transform: rotate(360deg)"
                            >
                                <path
                                    d="M12 12h2v12h-2z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    d="M18 12h2v12h-2z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    d="M12 2h8v2h-8z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="mt-10 pb-10">
                <button
                    @click="addStep"
                    type="button"
                    class="bg-green hover:bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full"
                >
                    + Add Steps
                </button>
            </div>
            <!-- ============================= DESCRIPTION   ===================================== -->
            <hr mt-10 mb-10 />
            <div class="flex w-full items-center mt-5 mb-5">
                <label class="w-2/12">Description</label>
                <textarea
                    v-model="description"
                    type="text"
                    rows="5"
                    cols="60"
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Description..."
                ></textarea>
            </div>
            <div class="form-group">
                <button
                    @click="createRecipe()"
                    type="button"
                    class="bg-green hover:bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import { post_recipe } from '../graphql/mutation'
import { useRouter, useRoute } from "vue-router";

const store = useStore()
const userData = computed(() => store.getters['main/user'])
const router = useRouter();
const route = useRoute();


const name = ref('')
const imageArray = ref([])
const category = ref('')
const prep_time = ref(0)
const calories = ref(0)
const servings = ref(0)
const description = ref('')

const openUploadModal = () => {
    console.log('upload started')
    cloudinary
        .openUploadWidget(
            { cloud_name: 'dyut9eifz', upload_preset: 'recipe' },
            (error, result) => {
                if (!error && result && result.event === 'success') {
                    // console.log('Done uploading..: ', result.info.url)
                    imageArray.value.push(result.info.url)
                }
            }
        )
        .open()
}

const ingrediant = ref([{ ing: '' }])
const steps = ref([{ step: '' }])

const addIngrediant = () => {
    ingrediant.value.push({ ing: '' })
}

const removeIngrediant = (index) => {
    ingrediant.value.splice(index, 1)
}

const addStep = () => {
    steps.value.push({
        step: '',
    })
    console.log(
        '{' +
            ingrediant.value.map((ingred) => {
                return ingred.ing
            }) +
            '}'
    )
}
const removeStep = (index) => {
    steps.value.splice(index, 1)
}

const { mutate: createRecipe, loading, error, onDone } = useMutation(
    post_recipe.mutation, () =>(
    {
        variables: {
            name: name.value,
            image:
                '{' +
                imageArray.value.map((img) => {
                    return img
                }) +
                '}',
            category: category.value,
            prep_time: prep_time.value,
            calories: calories.value,
            servings: servings.value,
            description: description.value,
            ingrediant:
                '{' +
                ingrediant.value.map((ingred) => {
                    return ingred.ing
                }) +
                '}',
            steps:
                '{' +
                steps.value.map((stp) => {
                    return stp.step
                }) +
                '}',
            user_id: userData.value.sub,
        },
    }),
    () => ({ fetchPolicy: 'no-cache' })
)

    onDone(() => {
      router.push({ name: "Profile" });
    //   router.go(0);
    });
</script>

<style scoped></style>
