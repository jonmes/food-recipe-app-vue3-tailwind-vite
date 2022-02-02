<template>
<div>
      <button @click="openUploadModal">Upload files</button>
</div>
</template>

<script setup>
name: 'Image-upload'
const openUploadModal = () => {
    window.cloudinary.openUploadWidget(
        { cloud_name: 'dyut9eifz',
          upload_preset: 'recipe'
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log('Done uploading..: ', result.info);          }
        }).open();
}
</script>

<style lang="scss" scoped>

</style>