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
          <span class="relative text-green"> Your Own &nbsp;</span> </span
        >&nbsp;Recipe
      </h1>
      <!-- =========================== title =============================================== -->
      <hr mt-10 mb-10 />
      <div class="flex w-full items-center mt-5 mb-5">
        <label class="w-2/12">Title</label>
        <input
          type="text"
          v-model="title"
          class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="title"
        />
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style scoped></style>
